import React, {useState,useEffect} from 'react'
import ReactTable from 'react-table'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import {without} from 'lodash'
import Dialog from './Dialog'
import 'react-table/react-table.css'
import '../css/Styles.css'
 
var MyTable =(props)=>{
    const [employeeDetails,setDetails] = useState()
    const [isOpen,setIsopen] = useState(false)
    const [newEmployee,setNemployee] = useState({})

    useEffect(()=>{
        setDetails(props.employee)
    },[props])
    
    const columns = [
            {
                Header : "Actions",
                Cell : props =>{
                    return(
                        <button style ={{backgroundColor:'white',color:"red",textAlign:'center'}} onClick={()=>viewHandler(props.original)}>View</button>
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
                Header : "Email",
                accessor : "email",
                style:{
                    textAlign:'center'
                }
            },
            {
                Header : "Mobile",
                accessor : "mobile",
                style:{
                    textAlign:'center'
                }
            },
            {
                Header : "Department",
                accessor : "department",
                style:{
                    textAlign:'center'
                }
            },
            {
                Header : "Role",
                accessor : "role",
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
                Header : "Experience",
                accessor : "experience",
                style:{
                    textAlign:'center'
                }   
            },
            {
                Header : "Actions",
                Cell : props =>{
                    return(
                        <button style ={{backgroundColor:'white',color:"red",textAlign:'center'}} onClick={()=>editHandler(props.original)}>Edit</button>
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
        setIsopen(!isOpen);
        setNemployee(emp)
    }

    function editHandler(emp){
        props.history.push({
            pathname: '/edit',
            data:{emp}
        })
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
            {newEmployee && Object.keys(newEmployee).length > 0 && <Dialog employee={newEmployee} isOpen={isOpen} onClose={()=>{ setIsopen(!isOpen)}}/>}
        </div>
    )
}

export default withRouter(MyTable);