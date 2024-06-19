const TestCase = require('../models/TestCase');

// Get all test cases
exports.getAllTestCases = async (req, res) => {
  try {
    const testCases = await TestCase.find().populate('problem');
    res.json(testCases);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single test case by ID
exports.getTestCaseById = async (req, res) => {
  try {
    const testCase = await TestCase.findById(req.params.id).populate('problem');
    if (!testCase) return res.status(404).json({ message: "Test case not found" });
    res.json(testCase);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new test case
exports.createTestCase = async (req, res) => {
  const { problem, input, output } = req.body;
  const newTestCase = new TestCase({ problem, input, output });
  try {
    const savedTestCase = await newTestCase.save();
    res.status(201).json(savedTestCase);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a test case by ID
exports.updateTestCaseById = async (req, res) => {
  try {
    const updatedTestCase = await TestCase.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTestCase) return res.status(404).json({ message: "Test case not found" });
    res.json(updatedTestCase);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a test case by ID
exports.deleteTestCaseById = async (req, res) => {
  try {
    const deletedTestCase = await TestCase.findByIdAndDelete(req.params.id);
    if (!deletedTestCase) return res.status(404).json({ message: "Test case not found" });
    res.json({ message: "Test case deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
