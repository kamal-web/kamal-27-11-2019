const empDetails =require('../models/schema');


function EmpController(){

}

//Create Emp
 EmpController.prototype.create = (req,res) => {
     if(!req.body){
        return res.status(400).send({
            message: "Details could not be empty"
        });
    }else{
        const emp = new empDetails({
            id        : req.body.id,
            name      : req.body.name,
            email     : req.body.email,
            mobile    : req.body.mobile,
            department: req.body.department,
            role      : req.body.role,
            salary    : req.body.salary
        });
        emp.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "values are Not inserted"
            })
        })

    }


 }

//Get All employees
EmpController.prototype.findAll = (req, res) => {
    empDetails.find()
    .then(emp => {
        res.send(emp);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Details are not retrived"
        })
    })

}

//Find one Employee
EmpController.prototype.findOne=(req,res)=>{
    let{id} =req.params;
    console.log(typeof(id))
    empDetails.findOne({id})
    .then(emp => {
        
        if(!emp){
            res.status(500).send({
                message:"Id not found, Please Enter valid Id"
            })
        }
        else{
            res.send(emp);
        }
    }).catch(err => {
        res.status(500).send({
            message: `Error:${err.message}`
        })
    })
    

}

//Update Employee
EmpController.prototype.update =(req, res)=> {
    let{id} =req.params;
    let emp = req.body;
    //console.log(emp.name)
    empDetails.findOneAndUpdate({id},{
        id :emp.id,
        name:emp.name,
        email:emp.email,
        department:emp.department,
        role:emp.role,
        salary:emp.salary,
    }, {new: true})
    .then(emp => {
        if(!emp){
            res.status(500).send({
                message:"Id not found, Please Enter valid Id"
            })
        }
        else{
            res.send(emp);
        }
    }).catch(err => {
        res.status(500).send({
            message: `Error:${err.message}`
        })
    })

    }

//Delete Employee
EmpController.prototype.delete = (req, res) => {
    
    let{id} =req.params;
    console.log(id)
    empDetails. findOneAndDelete({id})
    .then(emp => {
        
        if(!emp){
            res.status(500).send({
                message:"Id not found, Please Enter valid Id"
            })
        }
        else{
            res.send(emp);
        }
    }).catch(err => {
        res.status(500).send({
            message: `Error:${err.message}`
        })
    })

};

var employeeController = new EmpController();
module.exports = employeeController;
