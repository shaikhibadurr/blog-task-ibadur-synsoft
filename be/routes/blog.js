import express from 'express'
import Blog from '../models/Blog.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router()

router.get('/blogs', verifyToken, async (req, res) => {
  const blogs = await Blog.find()
  res.json(blogs)
})

export default router
