const Blog = require('../models/blogModel');

const createBlogPost = async (req, res) => {
  try {
    const { author, text, topic, rating } = req.body;

    const newPost = await Blog.create({
      author,
      text,
      topic,
      date: new Date(),
      rating,
    });
    res.json(newPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getBlogPosts = async (req, res) => {
  try {
    const posts = await Blog.find().limit(3);
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getBlogPostByAuthor = async (req, res) => {
  try {
    const { author } = req.params;
    const posts = await Blog.find({ author });
    if (!posts.length) {
      return res.status(404).json({ message: 'No entries found' });
    }
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const rateBlogPost = async (req, res) => {
  try {
    const { id } = req.params;
    const { rating } = req.body;
    const ratedPost = await Blog.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        rating: rating,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    return res.json(ratedPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteBlogPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPost = await Blog.findByIdAndDelete({
      _id: id,
    });
    if (!deletedPost) {
      return res.status(500).json({ message: 'post not found' });
    }
    return res.json(deletedPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createBlogPost,
  getBlogPosts,
  getBlogPostByAuthor,
  rateBlogPost,
  deleteBlogPostById,
};
