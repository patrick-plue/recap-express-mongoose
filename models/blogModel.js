const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
  author: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: [true, 'You should write something'],
  },
  date: Date,
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },
  topic: {
    type: String,
    enum: ['travel', 'sports', 'art'],
  },
});

module.exports = mongoose.model('Blog', blogSchema);
