const mongoose = require('mongoose')
const userSchema = require('./userModel')
const searchSchema = require('./searchModel')
const savedHomeSchema = require('./savedHomeModel')

const User = mongoose.model('User', userSchema)
const Search = mongoose.model('Search', searchSchema)
const SavedHome = mongoose.model('SavedHome', savedHomeSchema)

module.exports = {
    User,
    Search,
    SavedHome
}
