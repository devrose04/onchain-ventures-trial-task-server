
var express = require('express');
var router = express.Router();
var controller = require('../../controllers/api/prices.controller');

router.get('/getPreviousDayPrices', controller.getPreviousDayPrices);

module.exports = router;