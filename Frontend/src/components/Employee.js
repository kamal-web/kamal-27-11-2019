import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Aux from '../hoc/Aux'
import MyTable from './MyTable'
import Navbar from './Navbar'
import '../css/Styles.css'

function Employee(){
    const [employee,setEmployee] = useState([]);
    const [totalCtc,setCtc] = useState(0);
    const [isOpen,setIsopen] = useState(false)


    useEffect(() => {
        axios.get('/employee')
            .then(resp=>{
                setEmployee(resp.data)

            }).catch(err=>{
                console.error("Error",err)
            })

        axios.get('/employees/ctc')
            .then(res=>{
                setCtc(res.data.total)
            }).catch(err=>{
                console.error(err)
            })
        
    }, [])

     return(
            <div>
                <Aux>
                    <div class="container-fluid" >
                        {totalCtc > 0 && <Navbar totalCtc={totalCtc}/>}
                        {employee && employee.length >0 && <MyTable employee={employee}/>}
                    </div> 
                </Aux>       
            </div>
        )
}


export default Employee;