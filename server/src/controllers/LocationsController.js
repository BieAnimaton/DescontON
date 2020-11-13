const Locations = require('../models/Location');

module.exports = {
    async index (req, res) {
        const location = await Locations.find({});

        return res.json(location);
    },
    
    async create (req, res) {
        const location = await Locations.create(req.body);

        return res.json({ "Created Location": "Successfully" });
    },

    async delete (req, res) {
        const location = await Locations.findByIdAndDelete(req.params.id);

        return res.json({ "Deleted Location": "Successfully" });
    }
}