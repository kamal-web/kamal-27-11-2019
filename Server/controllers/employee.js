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
        if(!isValidArg(req.body.id)){
            res.status(402).json({message:"please provide id"})
        }
        if(!isValidArg(req.body.name)){
            res.status(402).json({message:"please provide name"})
        }
        if(!isValidArg(req.body.email)){
            res.status(402).json({message:"please provide email"})
        }
        if(!isValidArg(req.body.mobile)){
            res.status(402).json({message:"please provide mobile"})
        }
        if(!isValidArg(req.body.department)){
            res.status(402).json({message:"please provide department"})
        }
        if(!isValidArg(req.body.role)){
            res.status(402).json({message:"please provide role"})
        }
        if(!isValidArg(req.body.salary)){
            res.status(402).json({message:"please provide salary"})
        }
        if(!isValidArg(req.body.experience)){
            res.status(402).json({message:"please provide experience"})
        }
        const{id,name,email,mobile,department,role,salary} = req.body
        const emp = new Employee({id,name,email,mobile,department,role,salary});
        emp.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "values are Not inserted"
            })
            console.log("values are Not inserted",err.message)
        })
    }
 }

//Get All employees
EmpController.prototype.findAll = (req, res) => {
    Employee.find()
    .then(emp => {
        res.send(emp);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Details are not retrived"
        })
        console.log("values are Not inserted",err.message)
    })
}

//Find one Employee
EmpController.prototype.findOne=(req,res)=>{
    const{id} =req.params;
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
        res.status(500).send({
            message: `Error:${err.message}`
        })
        console.log("values are Not inserted",err.message)
    })
}

//Update Employee
EmpController.prototype.update =(req, res)=> {
    const{checkId} =req.params;
    const{id,name,email,department,role,salary} = req.body;
    //console.log(emp.name)
    Employee.findOneAndUpdate({checkId},{id:id,name:name,email:email,department:department,role:role,salary:salary}, {new: true})
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
        console.log("values are Not inserted",err.message)
    })
}

//Delete Employee
EmpController.prototype.delete = (req, res) => {
    
    let{id} =req.params;
    console.log(id)
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
        res.status(500).send({
            message: `Error:${err.message}`
        })
        console.log("values are Not inserted",err.message)
    })
};

var employeeController = new EmpController();
module.exports = employeeController;
