import { Router, Response } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/User'
import auth, { AuthRequest } from '../middleware/auth'

const router = Router()

router.post('/register', async (req: AuthRequest, res: Response) => {
  try {
    const { name, email, password } = req.body
    const existing = await User.findOne({ email })
    if (existing) return res.status(400).json({ error: 'Email already in use' })

    const hashed = await bcrypt.hash(password, 10)
    const user = await User.create({ name, email, password: hashed })

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET || 'secret', { expiresIn: '7d' })
    res.status(201).json({ token, user: { id: user._id, name: user.name, email: user.email, plan: user.plan } })
  } catch (err) {
    res.status(500).json({ error: 'Registration failed' })
  }
})

router.post('/login', async (req: AuthRequest, res: Response) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) return res.status(401).json({ error: 'Invalid credentials' })

    const match = await bcrypt.compare(password, user.password)
    if (!match) return res.status(401).json({ error: 'Invalid credentials' })

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET || 'secret', { expiresIn: '7d' })
    res.json({ token, user: { id: user._id, name: user.name, email: user.email, plan: user.plan } })
  } catch (err) {
    res.status(500).json({ error: 'Login failed' })
  }
})

router.get('/me', auth, async (req: AuthRequest, res: Response) => {
  res.json({ user: { id: req.user!._id, name: req.user!.name, email: req.user!.email, plan: req.user!.plan } })
})

export default router
