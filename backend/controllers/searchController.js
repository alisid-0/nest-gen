const { Search } = require('../models')

const getAllSearches = async (req, res) => {
    try {
        const searches = await Search.find()
        res.status(200).json(searches)
    } catch (e) {
        res.status(400).send(e.message)
    }
}

const getSearchById = async (req, res) => {
    try {
        const search = await Search.findById(req.params.id)
        if (!search) return res.status(404).send('No Search found!')
        res.status(200).json(search)
    } catch (e) {
        res.status(400).send(e.message)
    }
}

const createSearch = async (req, res) => {
    const search = new Search(req.body)
    try {
        await Search.save()
        res.status(201).send(search)
    } catch (e) {
        res.status(400).send(e.message)
    }
}

const updateSearch = async (req, res) => {
    try {
        const search = await Search.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!search) return res.status(404).send('No Search found!')
        res.status(200).send(search)
    } catch (e) {
        res.status(500).send(e.message)
    }
}

const deleteSearch = async (req, res) => {
    try {
        const search = await Search.findByIdAndDelete(req.params.id)
        if (!search) return res.status(404).send('No Search found!')
        res.status(200).send(`Search deleted successfully!`)
    } catch (e) {
        res.status(500).send(e.message)
    }
}

module.exports = {
    getAllSearches,
    getSearchById,
    createSearch,
    updateSearch,
    deleteSearch
}
