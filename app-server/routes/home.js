var express = require('express');
var ctrl = require('../controllers/main');
var router = express.Router(); //referenciamos el router

router.get('/', [ctrl.index, ctrl.indexLogs]);
router.get('/charlas', [ctrl.charla]);

module.exports = router;