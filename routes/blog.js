const express = require('express');
const router = express.Router();
const blogController = require('../controller/blogController');
router.get('/api/post', blogController.getBlog);

router.post('/api/post/add', blogController.addBlog);
router.get('/api/post/:contentId',blogController.getContent)
router.post('/api/post/edit/:contentId',blogController.editContent);
router.get('/api/post/delete/:contentId',blogController.deleteContent);

module.exports = router;