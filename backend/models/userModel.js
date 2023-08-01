const { Schema } = require('mongoose')

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: 'user' },
    saved_homes: { type: [String], default: '' }
  },
  { timestamps: true }
)

module.exports = userSchema
