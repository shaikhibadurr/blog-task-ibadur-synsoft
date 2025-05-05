import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'

const router = express.Router()

router.post('/signup', async (req, res) => {
  const { name, phone, email, password } = req.body
  const existing = await User.findOne({ email })
  if (existing) return res.status(400).json({ msg: 'User exists' })

  const hashed = await bcrypt.hash(password, 10)
  const user = new User({ name, phone, email, password: hashed })
  await user.save()
  res.status(201).json({ msg: 'User created' })
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (!user) return res.status(400).json({ msg: 'Invalid credentials' })

  const match = await bcrypt.compare(password, user.password)
  if (!match) return res.status(400).json({ msg: 'Invalid credentials' })

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' })
  res.json({ token })
})

export default router
