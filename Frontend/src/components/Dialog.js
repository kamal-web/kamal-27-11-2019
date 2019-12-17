import React, {useState,useEffect} from 'react'

function Dialog(props) {
    const [data,setData] = useState({})

    useEffect(()=>{
        setData(props.employee)
    },[props])

     let dialog = (
        <div className='dialog-box'>
            <button className='dialog-close' onClick={props.onClose}>x</button>
            <div>{data.id}--{data.name}--{data.email}</div>
        </div>
        )
     if(!props.isOpen){
         dialog = null;
         
     }
    return(
        <div>
            {dialog}
        </div>
    )
     
    
}

export default Dialog
