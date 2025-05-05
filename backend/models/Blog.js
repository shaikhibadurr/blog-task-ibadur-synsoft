import mongoose from 'mongoose'

const blogSchema = new mongoose.Schema({
  image: String,
  author: String,
  date: String,
  title: String,
  desc: String,
  tag: String
})

export default mongoose.model('Blog', blogSchema)
