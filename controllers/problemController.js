const Problem = require('../models/Problem');

// Get all problems
exports.getAllProblems = async (req, res) => {
  try {
    const problems = await Problem.find();
    res.json(problems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single problem by ID
exports.getProblemById = async (req, res) => {
  try {
    const problem = await Problem.findById(req.params.id);
    if (!problem) return res.status(404).json({ message: "Problem not found" });
    res.json(problem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new problem
exports.createProblem = async (req, res) => {
  const { name, statement, code, difficulty } = req.body;
  const newProblem = new Problem({ name, statement, code, difficulty });
  try {
    const savedProblem = await newProblem.save();
    res.status(201).json(savedProblem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a problem by ID
exports.updateProblemById = async (req, res) => {
  try {
    const updatedProblem = await Problem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedProblem) return res.status(404).json({ message: "Problem not found" });
    res.json(updatedProblem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a problem by ID
exports.deleteProblemById = async (req, res) => {
  try {
    const deletedProblem = await Problem.findByIdAndDelete(req.params.id);
    if (!deletedProblem) return res.status(404).json({ message: "Problem not found" });
    res.json({ message: "Problem deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
