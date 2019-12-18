import React from 'react';
import {withRouter} from 'react-router-dom'
import Aux from '../../hoc/Aux';
import Logo from '../Clogo.png'
import classes from '../Layout/Layout.css'

const layout = (props)=>{
    const signupHandler= ()=>{
        props.history.push('/signup')
    }
    return(
        <Aux>
        <div className='Header'>
            <img src={Logo} alt={Logo} max-width='40px'/>
            <button onClick={()=>signupHandler()} className='signup'>Signup</button>
        </div>
        <main className={classes.content}>
            {props.children}
        </main>
    </Aux>
    )
}

export default withRouter(layout);