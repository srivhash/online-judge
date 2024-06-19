const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  statement: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    enum: ['Easy', 'Medium', 'Hard'], // Optional field
    default: 'Medium'
  }
});

module.exports = mongoose.model('Problem', problemSchema);
