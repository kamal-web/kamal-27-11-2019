var express = require('express');
var router = express.Router();
var EmpController = require('../controllers/employee')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
     // Create a new employee
     router.post('/employee', EmpController.create);

    // Retrieve EmployeeDetails
    router.get('/employee', EmpController.findAll);

    // Retrieve a single EmployeeId with Id
     router.get('/employee/:id', EmpController.findOne);

    // Update an employee with Id
     router.put('/employee/:id', EmpController.update);

    // Delete an Employee with Id
    router.delete('/employee/:id', EmpController.delete);

module.exports = router;
