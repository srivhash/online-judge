const mongoose = require('mongoose');

const solutionSchema = new mongoose.Schema({
  problem: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Problem',
    required: true
  },
  verdict: {
    type: String,
    required: true
  },
  submittedAt: {
    type: Date,
    default: Date.now // Automatically sets the date when created
  }
});

module.exports = mongoose.model('Solution', solutionSchema);
