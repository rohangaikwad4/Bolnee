import { Router, Response } from 'express'
import Agent from '../models/Agent'
import auth, { AuthRequest } from '../middleware/auth'

const router = Router()

router.post('/', auth, async (req: AuthRequest, res: Response) => {
  try {
    const agent = await Agent.create({ ...req.body, userId: req.user!._id })
    res.status(201).json(agent)
  } catch (err) {
    res.status(500).json({ error: 'Failed to create agent' })
  }
})

router.get('/', auth, async (req: AuthRequest, res: Response) => {
  try {
    const agents = await Agent.find({ userId: req.user!._id })
    res.json(agents)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch agents' })
  }
})

router.get('/:id', auth, async (req: AuthRequest, res: Response) => {
  try {
    const agent = await Agent.findOne({ _id: req.params.id, userId: req.user!._id })
    if (!agent) return res.status(404).json({ error: 'Agent not found' })
    res.json(agent)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch agent' })
  }
})

router.put('/:id', auth, async (req: AuthRequest, res: Response) => {
  try {
    const agent = await Agent.findOneAndUpdate(
      { _id: req.params.id, userId: req.user!._id },
      req.body,
      { new: true }
    )
    if (!agent) return res.status(404).json({ error: 'Agent not found' })
    res.json(agent)
  } catch (err) {
    res.status(500).json({ error: 'Failed to update agent' })
  }
})

router.delete('/:id', auth, async (req: AuthRequest, res: Response) => {
  try {
    const agent = await Agent.findOneAndDelete({ _id: req.params.id, userId: req.user!._id })
    if (!agent) return res.status(404).json({ error: 'Agent not found' })
    res.json({ message: 'Agent deleted' })
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete agent' })
  }
})

export default router
