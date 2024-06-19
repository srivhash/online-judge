const express = require('express');
const router = express.Router();
const solutionController = require('../controllers/solutionController.js');

router.get('/solutions', solutionController.getAllSolutions);
router.post('/solutions', solutionController.createSolution);
router.get('/solutions/:id', solutionController.getSolutionById);
router.put('/solutions/:id', solutionController.updateSolutionById);
router.delete('/solutions/:id', solutionController.deleteSolutionById);

module.exports = router;