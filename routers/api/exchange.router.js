
var express = require('express');
var router = express.Router();
var controller = require('../../controllers/api/exchange.controller');

router.get('/getTokenBalances', controller.getTokenBalances);

module.exports = router;