import React, { Component } from 'react'
import axios from 'axios'
import setAuthorization from './setAuthorization'

export class LoginController extends Component {
    constructor(props){
        super(props)
        this.state={
            isAuth : false
        }   
    }

     login(mobile,password,cb){
         axios.post('/login',{mobile,password})
             .then(resp=>{
                const {token} = resp.data; 
                localStorage.setItem('token',token)
                setAuthorization(token)
                cb() 
             }).catch(err => {
                 console.error("Error", err);
          });
     }

     logout(cb){
        localStorage.removeItem('token')
        setAuthorization(localStorage.token)
        cb()
     }
}

export default new LoginController()
