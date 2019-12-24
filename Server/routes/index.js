var express = require('express');
var router = express.Router();
var EmpController = require('../controllers/employee')

// Create a new employee
router.post('/employee', EmpController.create);

// Retrieve EmployeeDetails
router.get('/employee', EmpController.findAll);

// Retrieve a single EmployeeId with Id
router.get('/employee/:id', EmpController.findOne);

// Retrieve Total ctc
router.get('/employees/ctc', EmpController.getCtc);

// Update an employee with Id
router.put('/employee/:id', EmpController.update);

// Delete an Employee with Id
router.delete('/employee/:id', EmpController.delete);

module.exports = router;
