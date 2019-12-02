const express = require('express')
const query = require('querystring')
const bodyParser = require('body-parser');
const fs = require('fs')

const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json())

//cors

app.options("/*", function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.sendStatus(200);
});

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
})

const port = 3000

//app.get('/hi',(req,res) =>res.json([{id:1},{id:2}]))

app.listen(port,() => console.log("App is running on port 3000"))

function read(){
   return fs.readFileSync('./data.json','utf8',(err,jString)=>{
        if(err){
            console.log('Error in fs',err)
        }else{
            //console.log(jString)
            return jString
        }
    })
}

app.get('/employee',(req,res)=>{
    var empDetails = JSON.parse(read());
    res.json(empDetails)
})

app.get('/employee',(req,res)=>{
    var empDetails = JSON.parse(read());
    let prjct = req.query;
    let i=0;
    for(key in prjct)
     {
        
         //console.log(key)
        if(empDetails[i].hasOwnProperty(key))
        {
            
            
            let {project:filterValue} = req.query;
            //console.log(key)
             var empFiltr = empDetails.filter(function(emp){
                //let filterKey = key;
                //console.log(filterValue)
                  if(emp.project == filterValue)
                 {
                      return emp
                }
             })

            res.send(empFiltr)
            
        }else
        {
            if(key == 'remove')
            {
                let {remove:removeval} = req.query;
                //console.log(removeval)
                 if(empDetails[i].hasOwnProperty(removeval))
                 {
                    //console.log('remove succeded')
                    var empMap = empDetails.map(function(emp){
                        let {"EmployeeId":id,salary,...rest} = emp;
                            return rest
                    })
                    res.json(empMap)

                 }
                
            }else{
                res.send('Specify valid query')
            }
        }
        i++;
     }

})

app.get('/employee/ctc',(req,res) =>{

    var empDetails = JSON.parse(read());
    var total = empDetails.reduce((acc,emp)=>acc+emp.salary,0)
     res.json(total)
        //console.log('emp')
})




