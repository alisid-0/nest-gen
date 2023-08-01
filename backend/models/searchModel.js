const { Schema } = require('mongoose')

const searchSchema = new Schema(
    {
        query: {type: String, default: ''}
    },
    { timestamps: true }
)

module.exports = searchSchema
