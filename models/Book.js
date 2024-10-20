const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  publishYear: {
    type: Number,
    required: true,
    min: 0,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
    validate: {
      validator: function (value) {
        return value >= 0;
      },
      message: 'Price must be a positive number',
    },
  },
  genre: {
    type: String,
    default: 'Unknown',
  },
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);