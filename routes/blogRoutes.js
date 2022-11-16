const express = require('express');
const router = express.Router();

const {
  createBlogPost,
  getBlogPosts,
  getBlogPostByAuthor,
  rateBlogPost,
  deleteBlogPostById,
} = require('../controllers/blogControllers');

router.post('/', createBlogPost);

router.get('/', getBlogPosts);

router.get('/:author', getBlogPostByAuthor);

router.put('/:id', rateBlogPost);

router.delete('/:id', deleteBlogPostById);

module.exports = router;
