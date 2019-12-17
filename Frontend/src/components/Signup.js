import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "../css/Styles.css";

function Signup(props) {
  var data;
  if (!props.location.data) {
    data = {
      id: null,
      name: null,
      email: null,
      mobile: null,
      department: null,
      role: null,
      salary: null,
      experience:null
    };
    var keys = Object.keys(data);
  } else {
    data = props.location.data.emp;
    //console.log(props.location.data)
    var [a, ...keys] = Object.keys(data);
  }

  //console.log(keys)

  //State
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
        console.log("id", id);
        break;
      case "name":
        setName(e.target.value);
        console.log("name", name);
        break;
      case "email":
        setEmail(e.target.value);
        console.log("email", email);
        break;
      case "mobile":
        setMobile(e.target.value);
        console.log("mobile", mobile);
        break;
      case "department":
        setDepartment(e.target.value);
        console.log("dept", department);
        break;
      case "role":
        setRole(e.target.value);
        console.log("role", role);
        break;
      case "salary":
        setSalary(e.target.value);
        console.log("salary", salary);
        break;
    case "experience":
        setExperience(e.target.value);
        console.log("experience", experience);
        break;
      default:
        console.log("ntg changed");
        break;
    }
  };

  const submitHandler = event => {
    event.preventDefault();
    alert("in submit");
    console.log(id)
    axios.get(`/employee/${id}`)
      .then(resp => {
        console.log(resp);
        axios.put(`/employee/${id}`, {id,name,email,mobile,department,role,salary,experience})
          .then(resp => {
            props.history.push("/");
          })
          .catch(err => {
            console.error(err);
          });
      })
      .catch(err => {
        console.log('in catch')
        axios.post("/employee", {id,name,email,mobile,department,role,salary,experience})
          .then(resp => {
                alert('Id not found, so details are saved succesfully')
                props.history.push("/");
          })
          .catch(err => {
            console.error("2Error", err);
          });
      });
  };
  return (
    <div className="from-block">
      <form className="form" onSubmit={event => submitHandler(event)}>
        {keys.map(name => {
          return (
            <div>
              {name}:
              <input type="text" name={name} defaultValue={data[name]} onChange={e => {changeHandler(e)}}/>
            </div>
          );
        })}
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default withRouter(Signup);
