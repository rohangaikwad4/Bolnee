import mongoose, { Document, Schema } from 'mongoose'

export interface IMessage extends Document {
  agentId: mongoose.Types.ObjectId
  sessionId: string
  role: 'user' | 'agent'
  content: string
  createdAt: Date
}

const messageSchema = new Schema<IMessage>({
  agentId: { type: Schema.Types.ObjectId, ref: 'Agent', required: true },
  sessionId: { type: String, required: true },
  role: { type: String, enum: ['user', 'agent'], required: true },
  content: { type: String, required: true },
}, { timestamps: true })

export default mongoose.model<IMessage>('Message', messageSchema)
