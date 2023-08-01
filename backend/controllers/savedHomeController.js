const { SavedHome } = require('../models')
const { User } = require('../models')

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
        const savedHome = await SavedHome.findOne({home_id: req.params.id});
        if (!savedHome) return res.status(404).send('No SavedHome found!');
        res.status(200).json(savedHome);
    } catch (e) {
        res.status(400).send(e.message);
    }
};

const deleteSavedHome = async (req, res) => {
    try {
        // find the savedHome first
        const savedHome = await SavedHome.findOne({ home_id: req.params.home_id });
        if (!savedHome) return res.status(404).send('No SavedHome found!')

        // find the user who saved this home
        const user = await User.findById(req.params.user_id);
        if (!user) return res.status(404).send('No user found!');

        // pull the savedHome from the user's saved_homes
        const index = user.saved_homes.indexOf(savedHome._id);
        if (index > -1) {
          user.saved_homes.splice(index, 1);
        }
        await user.save();

        // pull the user from the savedHome's user_ids
        const userIdIndex = savedHome.user_ids.indexOf(user._id);
        if (userIdIndex > -1) {
          savedHome.user_ids.splice(userIdIndex, 1);
        }
        await savedHome.save();

        // if no more users have saved this home, delete the home
        if (savedHome.user_ids.length == 0) {
            await SavedHome.deleteOne({ home_id: req.params.home_id });
        }

        res.status(200).send(`SavedHome deleted successfully from user's saved homes!`);
    } catch (e) {
        res.status(500).send(e.message);
    }
};








const createSavedHome = async (req, res) => {
    try {
        const savedHome = new SavedHome(req.body);
        
        const user = await User.findById(req.body.user_id);
        if (!user) return res.status(404).send('No user found!');
        
        user.saved_homes.push(savedHome._id);
        await user.save();

        savedHome.user_ids.push(user._id);
        await savedHome.save();
        
        res.status(201).json(savedHome);
    } catch (e) {
        res.status(400).send(e.message);
    }
};




const updateSavedHome = async (req, res) => {
    try {
        const savedHome = await SavedHome.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!savedHome) return res.status(404).send('No SavedHome found!')
        res.status(200).send(savedHome)
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
