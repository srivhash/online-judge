const express = require('express');
const router = express.Router();
const problemController = require('../controllers/problemController.js');

router.get('/problems', problemController.getAllProblems);
router.post('/problems', problemController.createProblem);
router.get('/problems/:id', problemController.getProblemById);
router.put('/problems/:id', problemController.updateProblemById);
router.delete('/problems/:id', problemController.deleteProblemById);

module.exports = router;