
const express = require('express');
const router = express.Router();
const controller = require('../controllers/auth-sync.controller');

router.post('/users', controller.syncUsers);

module.exports = router;