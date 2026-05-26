import { Router, Response } from 'express'
import Agent from '../models/Agent'
import Message from '../models/Message'
import auth, { AuthRequest } from '../middleware/auth'

const router = Router()

router.post('/', auth, async (req: AuthRequest, res: Response) => {
  try {
    const { agentId, sessionId, content } = req.body
    const agent = await Agent.findOne({ _id: agentId, userId: req.user!._id })
    if (!agent) return res.status(404).json({ error: 'Agent not found' })

    await Message.create({ agentId, sessionId, role: 'user', content })

    let simulatedResponse: string
    const kbMatch = agent.knowledgeBase.find(
      (kb) => content.toLowerCase().includes(kb.title.toLowerCase())
    )
    if (kbMatch) {
      simulatedResponse = `Based on your knowledge base entry "${kbMatch.title}": ${kbMatch.content.slice(0, 300)}`
    } else if (agent.instructions) {
      simulatedResponse = `[${agent.tone}] ${agent.instructions.slice(0, 200)}`
    } else {
      simulatedResponse = `Hello! I'm ${agent.name}. I'm here to help with your question about "${content.slice(0, 50)}".`
    }

    const agentMessage = await Message.create({ agentId, sessionId, role: 'agent', content: simulatedResponse })

    res.status(201).json({ userMessage: content, agentMessage: agentMessage.content, sessionId })
  } catch (err) {
    res.status(500).json({ error: 'Failed to send message' })
  }
})

router.get('/:sessionId', auth, async (req: AuthRequest, res: Response) => {
  try {
    const messages = await Message.find({ sessionId: req.params.sessionId })
      .sort({ createdAt: 1 })
    res.json(messages)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch messages' })
  }
})

export default router
