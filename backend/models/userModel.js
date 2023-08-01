const { Schema, Types } = require('mongoose')

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: 'user' },
    saved_homes: { type: [Types.ObjectId], ref: 'SavedHome' },
    searches: {type: [Types.ObjectId], ref: 'Searches'}
  },
  { timestamps: true }
)

module.exports = userSchema
