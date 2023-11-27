
const express = require('express');
const router = express.Router();
const controller = require('../../controllers/api/system.controller');

router.get('/checkSynthetixStatus', controller.checkSynthetixStatus);
router.get('/fetchKwentaStatus', controller.fetchKwentaStatus);

module.exports = router;