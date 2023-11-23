
var express = require('express');
var router = express.Router();
var controller = require('../../controllers/api/stats.controller');

router.get('/getFuturesStats', controller.getFuturesStats);

module.exports = router;