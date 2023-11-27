
const express = require('express');
const router = express.Router();
const controller = require('../../controllers/api/stats.controller');

router.get('/getFuturesStats', controller.getFuturesStats);

module.exports = router;