const express = require('express');
const router = express.Router();
const submissionController = require('../controllers/problemSubmission');

router.post('/execute-code', submissionController.executeCode);
// router.post('/', submissionController.createExample);

module.exports = router;
