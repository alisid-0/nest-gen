const Router = require('express').Router()
const controller = require('../controllers/searchController')

Router
    .get('/', controller.getAllSearches)
    .get('/:id', controller.getSearchById)
    .post('/', controller.createSearch)
    .put('/:id', controller.updateSearch)
    .delete('/:id', controller.deleteSearch)

module.exports = Router
