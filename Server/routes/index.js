var express = require('express');
var router = express.Router();
var EmpController = require('../controllers/employee')
const jwt  = require('jsonwebtoken')

const authenticate=(req,res,next)=>{
    const bearerHeader = req.headers['authorization'];
      if(typeof bearerHeader !== 'undefined'){
         const bearer = bearerHeader.split(' ');
         const bearerToken = bearer[1];
         req.token = bearerToken;
         next();
     }else{
         res.status(403).send({
             message:'Authentication required'
         })
     }  
}

const Verify = (req,res,next)=>{
    jwt.verify(req.token, 'topSecret',(err,authData)=>{
        if(err){
            console.error(err.message)
            res.status(403).send({
                message:'Authentication required'
            })
        }
        next();
        
    })
}

// Create a new employee
router.post('/employee',EmpController.create);

//Login
router.post('/login',EmpController.login);

// Retrieve EmployeeDetails
router.get('/employee' ,authenticate,Verify,EmpController.findAll);

// Retrieve a single EmployeeId with Id
router.get('/employee/:id',authenticate,Verify,EmpController.findOne);

// Retrieve Total ctc
router.get('/employees/ctc',authenticate,Verify,EmpController.getCtc);

// Update an employee with Id
router.put('/employee/:id',authenticate,Verify,EmpController.update);

// Delete an Employee with Id
router.delete('/employee/:id',authenticate,Verify,EmpController.delete);

module.exports = router;
