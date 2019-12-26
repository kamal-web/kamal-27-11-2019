import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Aux from '../hoc/Aux'
import MyTable from './MyTable'
import Navbar from './Navbar'
import Log from './Auth/LoginController'
import '../css/Styles.css'

function Employee(props){
    const [employee,setEmployee] = useState([]);
    const [totalCtc,setCtc] = useState(0);

    useEffect(() => {
        axios.all([
            axios.get('/employee'),
            axios.get('/employees/ctc')
        ]).then(axios.spread((employeeDetails,total)=>{
            setEmployee(employeeDetails.data);
            setCtc(total.data.total);
        }
        )).catch(err=> console.log(err))
    }, [])

    const logoutHandler =()=>{
        Log.logout(()=>{
            props.history.push('/login')
        })
    }

    return(
            <div>
                <Aux>
                    <div class="container-fluid" >
                        {<button onClick={()=>{logoutHandler()}} style={{margin:"10px",float:"right",color:'white',backgroundColor:'#fb4034'}}>Logout</button>}
                        {totalCtc > 0 && <Navbar totalCtc={totalCtc}/>}
                        {employee && employee.length >0 && <MyTable employee={employee}/>}
                    </div> 
                </Aux>       
            </div>
    )
}


export default Employee;