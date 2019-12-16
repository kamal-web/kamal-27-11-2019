import React, {useState,useEffect} from 'react'
import ReactTable from 'react-table'
import axios from 'axios'
import {without} from 'lodash'
import Dialog from './Dialog'
import 'react-table/react-table.css'
import '../css/Styles.css'
 
var MyTable =(props)=>{
    const [employeeDetails,setDetails] = useState()
    const [isOpen,setIsopen] = useState(false)
    useEffect(()=>{
    console.log("props in table",props.employee)
        setDetails(props.employee)
    },[props])
    //console.log(employeeDetails)

    const columns = [
            {
                Header : "Actions",
                Cell : props =>{
                    return(
                        <button style ={{backgroundColor:'white',color:"red",textAlign:'center'}} onClick={viewHandler(props.original)}>View</button>
                    )
                },
                width:100,
                maxWidth:100,
                minWidth:100,
            },
            {
                Header : "EmployeeId",
                accessor : "id",
                style:{
                    textAlign:'left'
                }
                
            },
            {
                Header : "Name",
                accessor : "name",
                style:{
                    textAlign:'center'
                }
            },
            {
                Header : "Project",
                accessor : "project",
                style:{
                    textAlign:'center'
                }
            },
            {
                Header : "Experience",
                accessor : "exp",
                style:{
                    textAlign:'center'
                }
            },
            {
                Header : "Salary",
                accessor : "salary",
                style:{
                    textAlign:'center'
                }
            },
            {
                Header : "Blood-Group",
                accessor : "bloodgroup",
                style:{
                    textAlign:'center'
                }   
            },
            {
                Header : "Actions",
                Cell : props =>{
                    return(
                        <button style ={{backgroundColor:'white',color:"red",textAlign:'center'}}>Edit</button>
                    )
                },
                width:100,
                maxWidth:100,
                minWidth:100
            },
            {
                Header : "Actions",
                Cell : props =>{
                    return(
                        <button style ={{backgroundColor:'white',color:"red",textAlign:'center'}} onClick={()=>deleteHandler(props.original)}>Delete</button>
                    )
                },
                width:100,
                maxWidth:100,
                minWidth:100
            }
        ]
function viewHandler(emp){
    setIsopen(true);
    console.log('in view',isOpen)
    // return(
    //     <div>
    //         <Dialog isOpen={isOpen} employee={emp} />
    //     </div>
    // )
}
    
function deleteHandler(emp){
    
    const {id} = emp;
    axios.delete(`/employee/${id}`)
         .then(resp=>{
             const newEmployee = without(employeeDetails,emp)
             setDetails(newEmployee);
         })
         .catch(err=>{
             console.error('Error',err)
         })
}

        return(
            <div>
                <ReactTable
                    columns={columns}
                    data ={employeeDetails}
                    defaultPageSize = {10}
                >
                </ReactTable>
            </div>
        )
}

export default MyTable;