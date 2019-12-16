import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Logo from '../components/Clogo.png'
import MyTable from './MyTable'
import Navbar from './Navbar'

function Employee(){
    const [employee,setEmployee] = useState([]);
    const [totalCtc,setCtc] = useState(0);

    useEffect(() => {
        axios.get('/employee')
            .then(resp=>{
                setEmployee(resp.data)

            }).catch(err=>{
                console.error("Error",err)
            })

        // axios.get('/employee/ctc')
        //     .then(res=>{
        //         console.log(res.data)
        //         setCtc(res.data)

        //     }).catch(err=>{
        //         console.error("Error",err)
        //     })
        
    }, [])

     return(
            <div>
                <div className='Header'>
                    <img src={Logo} alt={Logo} maxWidth='40px'/>
                </div>
                <div class="container-fluid" >
                    <Navbar />
                    <MyTable employee={employee}/>
                </div>       
            </div>
        )
}


export default Employee;