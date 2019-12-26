import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'
import Aux from '../../hoc/Aux'
import Log from './LoginController'

const Login = (props)=> {
    const [controls,setControls] = useState({
    phone:{
        elementConfig:{
            type:'tel',
            placeholder: 'Mobile Number'
        },
        value: '',
        validation:{
            required:true
        },
        pattern:'^[6-9]{1}[0-9]{9}',
        valid:false,
        touched:false
    },
    Password:{
        elementConfig:{
            type:'password',
            placeholder: 'Password'
        },
        value: '',
        validation:{
            required:true,
        },
        valid:false,
        touched:false
    }
    })

    const changeHandler = (event,controlName)=>{
        const updatedControls = {
            ...controls,
              [controlName.id]:{
                  ...controls[controlName.id],
                 value:event.target.value,
                 valid:checkValidity(event.target.value, controls[controlName.id].validation),
                 touched:true
              }
        }
        setControls(updatedControls)   
    }
    
    const checkValidity= (value,rules) => {
        let isValid = true;
        if(!rules){
            return true;
        }
        if(rules.requires){
            isValid = value.trim() !== '' && isValid;
        }
        return isValid
    }

    let formArray = [];
    for(let key in controls){
        formArray.push({
            id:key,
            config:controls[key]
        });
    }
    
    let form = formArray.map(element=>(
            <input 
            className='input' 
            type={element.config.elementConfig['type']} 
            placeholder={element.config.elementConfig['placeholder']} 
            defaultValue={element.config.value} pattern={element.config.pattern}
            onChange={(event)=>changeHandler(event,element)} 
            required/>
            )
        )

    const submitHandler =(event)=>{
        event.preventDefault();
        const {value:mobile}=controls.phone;
        const {value:password}=controls.Password;
        Log.login(mobile,password,()=>{props.history.push('/admin')})
    }

    return (
        <div className='Auth'>
            <Aux>
                {localStorage.getItem('token') ?<Redirect push to="/admin"/>: (
                    <form onSubmit={event => submitHandler(event)}>
                        {form}
                        <input className='input' type="submit" value="submit" />
                    </form> 
                )}           
            </Aux> 
        </div>
    )
}

export default Login;