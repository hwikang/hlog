const express = require('express');
const router = express.Router();
const blogController = require('../controller/blogController');
router.get('/api/post', blogController.getBlog);

router.post('/api/post/add', blogController.addBlog);


module.exports = router;