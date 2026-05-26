import mongoose, { Document, Schema } from 'mongoose'

export interface IAgent extends Document {
  userId: mongoose.Types.ObjectId
  name: string
  tone: string
  instructions: string
  channels: string[]
  knowledgeBase: { title: string; type: 'pdf' | 'docx' | 'url' | 'text'; content: string }[]
  createdAt: Date
  updatedAt: Date
}

const agentSchema = new Schema<IAgent>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  tone: { type: String, default: 'professional' },
  instructions: { type: String, default: '' },
  channels: [{ type: String }],
  knowledgeBase: [{
    title: String,
    type: { type: String, enum: ['pdf', 'docx', 'url', 'text'] },
    content: String,
  }],
}, { timestamps: true })

export default mongoose.model<IAgent>('Agent', agentSchema)
