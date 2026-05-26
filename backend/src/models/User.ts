import mongoose, { Document, Schema } from 'mongoose'

export interface IUser extends Document {
  name: string
  email: string
  password: string
  plan: 'free' | 'standard' | 'premium' | 'enterprise'
  createdAt: Date
  updatedAt: Date
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  plan: { type: String, enum: ['free', 'standard', 'premium', 'enterprise'], default: 'free' },
}, { timestamps: true })

export default mongoose.model<IUser>('User', userSchema)
