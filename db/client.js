const mongoose = require('mongoose');

const { MONGO_URI } = process.env;

module.exports = mongoose
  .connect(MONGO_URI)
  .then(() => console.log('Connected successfully'))
  .catch((err) => console.log(err));
