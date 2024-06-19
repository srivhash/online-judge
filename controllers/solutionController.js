const Solution = require('../models/Solution');

// Get all solutions
exports.getAllSolutions = async (req, res) => {
  try {
    const solutions = await Solution.find().populate('problem');
    res.json(solutions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single solution by ID
exports.getSolutionById = async (req, res) => {
  try {
    const solution = await Solution.findById(req.params.id).populate('problem');
    if (!solution) return res.status(404).json({ message: "Solution not found" });
    res.json(solution);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new solution
exports.createSolution = async (req, res) => {
  const { problem, verdict } = req.body;
  const newSolution = new Solution({ problem, verdict });
  try {
    const savedSolution = await newSolution.save();
    res.status(201).json(savedSolution);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a solution by ID
exports.updateSolutionById = async (req, res) => {
  try {
    const updatedSolution = await Solution.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedSolution) return res.status(404).json({ message: "Solution not found" });
    res.json(updatedSolution);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a solution by ID
exports.deleteSolutionById = async (req, res) => {
  try {
    const deletedSolution = await Solution.findByIdAndDelete(req.params.id);
    if (!deletedSolution) return res.status(404).json({ message: "Solution not found" });
    res.json({ message: "Solution deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
