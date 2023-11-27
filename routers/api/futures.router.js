
const express = require('express');
const router = express.Router();
const controller = require('../../controllers/api/futures.controller');

router.get('/getMarkets', controller.getMarkets);
router.get('/getFuturesTrades', controller.getFuturesTrades);
router.get('/getPythCandles', controller.getPythCandles);
router.get('/getFuturesMarkets', controller.getFuturesMarkets);

module.exports = router;
