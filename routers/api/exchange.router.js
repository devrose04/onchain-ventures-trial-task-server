
const express = require('express');
const router = express.Router();
const controller = require('../../controllers/api/exchange.controller');

router.get('/getTokenBalances', controller.getTokenBalances);

module.exports = router;