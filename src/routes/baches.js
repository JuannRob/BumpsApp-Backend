const express = require('express');
const router = express.Router();
const bachesController = require('../controllers/baches.controller')

router.get('/baches', bachesController.getBaches);

module.exports = router;
