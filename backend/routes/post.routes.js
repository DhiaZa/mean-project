const express = require('express');
const router = express.Router();
const { createPost, getAllPosts, likePost, commentPost } = require('../controllers/post.controller');

router.post('/', createPost);
router.get('/', getAllPosts);
router.post('/:id/like', likePost);
router.post('/:id/comment', commentPost);

module.exports = router;