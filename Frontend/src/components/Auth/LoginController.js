import React, { Component } from 'react'
import axios from 'axios'

export class LoginController extends Component {
    constructor(props){
        super(props)
        this.state={
            isAuth : false
        }   
    }

     login(mobile,password,cb){
         console.log('in login',mobile)
         axios.post('/login',{mobile,password})
             .then(resp=>{
                const {token} = resp.data; 
                localStorage.setItem('token',token)
                cb() 
             }).catch(err => {
                 console.error("Error", err);
          });
     }
     
     logout(cb){
        localStorage.removeItem('token')
        cb()
     }
}

export default new LoginController()
