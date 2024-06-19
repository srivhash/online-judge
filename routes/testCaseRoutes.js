const express = require('express');
const router = express.Router();
const testCaseController = require('../controllers/testCaseController.js');

router.get('/testcases', testCaseController.getAllTestCases);
router.post('/testcases', testCaseController.createTestCase);
router.get('/testcases/:id', testCaseController.getTestCaseById);
router.put('/testcases/:id', testCaseController.updateTestCaseById);
router.delete('/testcases/:id', testCaseController.deleteTestCaseById);

module.exports = router;