var express = require('express');
var ctrl = require('../app-server/controllers/users');
var routes = express.Router(); //creamos el router

routes.get('/', ctrl.profile);

module.exports = routes;