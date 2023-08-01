const { Schema, Types } = require('mongoose')

const savedHomeSchema = new Schema(
    {
        address: { type: String, default: ''}
    },
    { timestamps: true }
)

module.exports = planSchema
