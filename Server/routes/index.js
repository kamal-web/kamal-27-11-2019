var express = require('express');
var router = express.Router();
var EmpController = require('../controllers/employee')

const authenticate=(req,res,next)=>{
    console.log(req.body)
    // const bearerHeader = req.header['Authorization'];
    // console.log(bearerHeader)
    //  if(typeof bearerHeader !== 'undefined'){
    //     const bearer = bearerHeader.split(' ');
    //     const bearerToken = bearer[1];
    //     req.token = bearerToken;
    //     next();
    // }else{
    //     res.status(403).send({
    //         message:'Authentication required'
    //     })
    // }
    
}

const Verify = (req,res,next)=>{
    jwt.verify(req.token, 'topSecret',(err,authData)=>{
        if(err){
            res.status(403).send({
                message:'Authentication required'
            })
        }else{
            res.status(200).send({
                message:'success',
                authData
            })
        }
    })
}

// Create a new employee
router.post('/employee',EmpController.create);

//Login
router.post('/login',EmpController.login);

// Retrieve EmployeeDetails
router.get('/employee' ,EmpController.findAll);

// Retrieve a single EmployeeId with Id
router.get('/employee/:id',EmpController.findOne);

// Retrieve Total ctc
router.get('/employees/ctc',EmpController.getCtc);

// Update an employee with Id
router.put('/employee/:id',EmpController.update);

// Delete an Employee with Id
router.delete('/employee/:id',EmpController.delete);

module.exports = router;
