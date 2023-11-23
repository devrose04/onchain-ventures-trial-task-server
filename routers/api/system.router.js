
var express = require('express');
var router = express.Router();
var controller = require('../../controllers/api/system.controller');

router.get('/checkSynthetixStatus', controller.checkSynthetixStatus);
router.get('/fetchKwentaStatus', controller.fetchKwentaStatus);

module.exports = router;