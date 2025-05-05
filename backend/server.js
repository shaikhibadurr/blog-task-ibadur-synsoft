import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import authRoutes from './routes/auth.js'
import blogRoutes from './routes/blog.js'
import { fileURLToPath } from 'url'
import path from 'path'

dotenv.config()

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(cors())
app.use(express.json())
app.use('/api/assets', express.static(path.join(__dirname, 'assets')))

app.use('/api', authRoutes)
app.use('/api', blogRoutes)
app.get('/api/check', (req, res) => {
  res.status(200).json({ message: 'Backend is running ✅' });
});

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('MongoDB connected')
  app.listen(process.env.PORT, () =>
    console.log(`Server running on port ${process.env.PORT}`)
  )
}).catch((err) => console.error(err))
