
var express = require('express');
var router = express.Router();
var controller = require('../controllers/auth-sync.controller');

router.post('/users', controller.syncUsers);

module.exports = router;