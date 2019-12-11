var express = require('express');
var router = express.Router();
var EmpController = require('../controllers/employeeCrud')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
     // Create a new Note
     router.post('/add', EmpController.create);

    // Retrieve all Notes
    router.get('/employee', EmpController.findAll);

    // Retrieve a single Note with noteId
     router.get('/employee/:id', EmpController.findOne);

    // Update a Note with noteId
     router.put('/employee/:id', EmpController.update);

    // Delete a Note with noteId
    router.delete('/employee/:id', EmpController.delete);

module.exports = router;
