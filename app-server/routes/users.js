var express = require('express');
var ctrl = require('../controllers/users');
var routes = express.Router(); //creamos el router

routes.get('/', ctrl.profile);

module.exports = routes;