import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "../css/Styles.css";
import Aux from '../hoc/Aux'
import Form from './Form'

function Signup(props) {
  let empData,a,key;
  if (!props.location.data) {
    empData = {
      id: null,
      name: null,
      email: null,
      mobile: null,
      department: null,
      role: null,
      salary: null,
      experience:null
    };
     key = Object.keys(empData);
  } else {
    empData = props.location.data.emp;
    [a, ...key] = Object.keys(empData);
  }
  
  //State
  const [keys, setKey] = useState(key);
  const [data, setData] = useState(empData);
  const [id, setId] = useState(data.id);
  const [name, setName] = useState(data.name);
  const [email, setEmail] = useState(data.email);
  const [mobile, setMobile] = useState(data.mobile);
  const [department, setDepartment] = useState(data.department);
  const [role, setRole] = useState(data.role);
  const [salary, setSalary] = useState(data.salary);
  const [experience, setExperience] = useState(data.experience);
  
  const changeHandler = e => {
    switch (e.target.name) {
      case "id":
        setId(e.target.value);
        break;
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "mobile":
        setMobile(e.target.value);
        break;
      case "department":
        setDepartment(e.target.value);
        break;
      case "role":
        setRole(e.target.value);
        break;
      case "salary":
        setSalary(e.target.value);
        break;
    case "experience":
        setExperience(e.target.value);
        break;
    }
  };

  const submitHandler = event => {
    event.preventDefault();
    if(!props.location.data){
      axios.post("/employee", {id,name,email,mobile,department,role,salary,experience})
          .then(resp => {
                alert('details are saved succesfully')
                props.history.push("/");
          })
          .catch(err => {
            console.error("2Error", err);
          });

    }else{
      axios.put(`/employee/${id}`, {id,name,email,mobile,department,role,salary,experience})
          .then(resp => {
            alert('details updated successfully')
            props.history.push("/");
          })
          .catch(err => {
            console.error(err);
          });
    }      
  };
  return (
    <div>
      <Aux>
        {keys && keys.length>0 && <Form myKey={keys} empData={data} submitHandler={(event)=>submitHandler(event)} changeHandler={(e)=>changeHandler(e)}/>}
      </Aux>
    </div>
    
  );
}

export default withRouter(Signup);
