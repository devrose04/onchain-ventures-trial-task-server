
const express = require('express');
const router = express.Router();
const controller = require('../../controllers/api/prices.controller');

router.get('/getPreviousDayPrices', controller.getPreviousDayPrices);
router.get('/getUpdatedPrices', controller.getUpdatedPrices);
router.get('/getPortfolioPrices', controller.getPortfolioPrices);

module.exports = router;