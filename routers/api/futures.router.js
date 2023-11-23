
var express = require('express');
var router = express.Router();
var controller = require('../../controllers/api/futures.controller');

router.get('/getMarkets', controller.getMarkets);

module.exports = router;