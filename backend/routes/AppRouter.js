const Router = require('express').Router()

const UserRouter = require('./userRouter')
const SavedHomeRouter = require('./savedHomeRouter')
const SearchRouter = require('./searchRouter')


Router.use('/users', UserRouter)
Router.use('/search', SearchRouter)
Router.use('/savedhomes', SavedHomeRouter)


module.exports = Router
