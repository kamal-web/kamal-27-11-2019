const Employee =require('../models/schema');


function EmpController(){

}
var isValidArg = function (arg) {
  if (!arg) {
    return false;
  }
  return true;
};

//Create Emp
 EmpController.prototype.create = (req,res) => {
     if(!req.body){
        return res.status(400).send({
            message: "Details could not be empty"
        });
    }else{
        const {id,name,email,mobile,department,role,salary} = req.body
        if(!isValidArg(id)){
            res.status(402).json({message:"please provide id"})
        }
        if(!isValidArg(name)){
            res.status(402).json({message:"please provide name"})
        }
        if(!isValidArg(email)){
            res.status(402).json({message:"please provide email"})
        }
        if(!isValidArg(mobile)){
            res.status(402).json({message:"please provide mobile"})
        }
        if(!isValidArg(department)){
            res.status(402).json({message:"please provide department"})
        }
        if(!isValidArg(role)){
            res.status(402).json({message:"please provide role"})
        }
        if(!isValidArg(salary)){
            res.status(402).json({message:"please provide salary"})
        }
        if(!isValidArg(experience)){
            res.status(402).json({message:"please provide experience"})
        }
        
        const emp = new Employee({id,name,email,mobile,department,role,salary});
        emp.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            console.error("values are Not inserted",err.message)
            res.status(500).send({
                message: err.message || "values are Not inserted"
            })
        })
    }
 }

//Get All employees
EmpController.prototype.findAll = (req, res) => {
    Employee.find()
    .then(emp => {
        res.send(emp);
    }).catch(err => {
        console.error("Detailes are Not retrived",err.message)
        res.status(500).send({
            message: err.message || "Details are not retrived"
        })
        
    })
}

//Find one Employee
EmpController.prototype.findOne=(req,res)=>{
    const {id} =req.params;
    //console.log('id in findOne',id)
    Employee.findOne({id})
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
        console.error("values not found",err.message)
        res.status(500).send({
            message: `Error:${err.message}`
        })
    })
}

//Update Employee
EmpController.prototype.update =(req, res)=> {
    const {id} =req.params;
    const {id:eid,name,email,mobile,department,role,salary} = req.body;
    console.log(id)
    Employee.findOneAndUpdate({id},{id:eid,name:name,email:email,department:department,role:role,salary:salary}, {new: true})
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
        console.error("Id not matched",err.message)
        res.status(500).send({
            message: `Error:${err.message}`
        })
    })    
}

//Delete Employee
EmpController.prototype.delete = (req, res) => {
    
    const {id} =req.params;
    Employee. findOneAndDelete({id})
    .then(emp => {
        
        if(!emp){
            res.status(500).send({
                message:"Id not found, Please Enter valid Id"
            })
        }
        else{
            res.status(200).json({data:emp,message:"Successfully Deleted data"});
        }
    }).catch(err => {
        console.error("Id not matched",err.message)
        res.status(500).send({
            message: `Error:${err.message}`
        })
    })
};

var employeeController = new EmpController();
module.exports = employeeController;
