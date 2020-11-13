const User = require('../models/Users');

module.exports = {
    async index (req, res) {
        const users = await User.find({});

        return res.json(users);
    },

    async create (req, res) {
        const users = await User.create(req.body);

        return res.json({ "Created User": "Successfully" });
    },

    async delete (req, res) {
        const users = await User.findByIdAndDelete(req.params.id);

        return res.json({ "Deleted User": "Successfully" });
    }
}