const express = require('express');
const router = express.Router();
const homeController = require('../controller/homeController');

router.get('/api',homeController.getHome);

module.exports = router;