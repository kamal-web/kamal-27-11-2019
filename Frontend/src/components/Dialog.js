import React from 'react'

function Dialog(props) {
    console.log(props)
    let dialog = (
        <div className='dialog-box'>
            <button className='dialog-close'>x</button>
            <div>{props.employee}</div>
        </div>)
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
