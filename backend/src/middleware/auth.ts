import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import User, { IUser } from '../models/User'

export interface AuthRequest extends Request {
  user?: IUser
}

export default async function auth(req: AuthRequest, res: Response, next: NextFunction) {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '')
    if (!token) return res.status(401).json({ error: 'No token provided' })
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret') as { userId: string }
    const user = await User.findById(decoded.userId)
    if (!user) return res.status(401).json({ error: 'User not found' })
    
    req.user = user
    next()
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' })
  }
}
