import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: { type: String, unique: true },
  password: String
})

export default mongoose.model('User', userSchema)
