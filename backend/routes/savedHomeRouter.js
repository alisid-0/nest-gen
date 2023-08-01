const Router = require('express').Router()
const controller = require('../controllers/savedHomeController')

Router
    .get('/', controller.getAllSavedHomes)
    .get('/:id', controller.getSavedHomeById)
    .post('/', controller.createSavedHome)
    .put('/:id', controller.updateSavedHome)
    .delete('/:home_id/:user_id', controller.deleteSavedHome)

module.exports = Router
