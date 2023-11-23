
var express = require('express');
var router = express.Router();
var controller = require('../../controllers/api/synths.controller');

router.get('/getSynthBalances', controller.getSynthBalances);
router.get('/getSynthV3BalancesAndAllowances', controller.getSynthV3BalancesAndAllowances);

module.exports = router;