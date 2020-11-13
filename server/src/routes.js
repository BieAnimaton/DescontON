const express = require('express');
const routes = express.Router();

const UsersController = require('./controllers/UsersControllers');
const LocationsController = require('./controllers/LocationsController');

routes.get('/', (req, res) => {
    res.json({ "message": "hello" });
})

routes.get('/users', UsersController.index)
routes.post('/users', UsersController.create)
routes.delete('/users/:id', UsersController.delete)

routes.get('/locations', LocationsController.index)
routes.post('/locations', LocationsController.create)
routes.delete('/locations/:id', LocationsController.delete)

module.exports = routes;