import { Document, Schema, model } from 'mongoose'

interface UserSchema extends Document {
  username: string
  email: string
  password: string
}

const schema = new Schema({
  username: {
    type: String,
    required: true,
    min: 4,
    lowercase: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
})

export default model<UserSchema>('User', schema)
