const { SavedHome } = require('../models')

const getAllSavedHomes = async (req, res) => {
    try {
        const SavedHomes = await SavedHome.find()
        res.status(200).json(SavedHomes)
    } catch (e) {
        res.status(400).send(e.message)
    }
}

const getSavedHomeById = async (req, res) => {
    try {
        const savedHome = await SavedHome.findById(req.params.id)
        if (!savedHome) return res.status(404).send('No SavedHome found!')
        res.status(200).json(savedHome)
    } catch (e) {
        res.status(400).send(e.message)
    }
}

const createSavedHome = async (req, res) => {
    const savedHome = new SavedHome(req.body)
    try {
        await SavedHome.save()
        res.status(201).send(savedHome)
    } catch (e) {
        res.status(400).send(e.message)
    }
}

const updateSavedHome = async (req, res) => {
    try {
        const savedHome = await SavedHome.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!savedHome) return res.status(404).send('No SavedHome found!')
        res.status(200).send(savedHome)
    } catch (e) {
        res.status(500).send(e.message)
    }
}

const deleteSavedHome = async (req, res) => {
    try {
        const savedHome = await SavedHome.findByIdAndDelete(req.params.id)
        if (!savedHome) return res.status(404).send('No SavedHome found!')
        res.status(200).send(`SavedHome deleted successfully!`)
    } catch (e) {
        res.status(500).send(e.message)
    }
}

module.exports = {
    getAllSavedHomes,
    getSavedHomeById,
    createSavedHome,
    updateSavedHome,
    deleteSavedHome
}
