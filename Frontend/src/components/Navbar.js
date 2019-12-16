import React from 'react'
import '../css/Styles.css'

var Navbar=()=> {
    return (
            <div className='Nav-bar'>
                <div className='nav-list'>Employee List</div>
                <div className='nav-ctc'>
                    <span className='nav-total'>Total CTC:</span>
                    <span className='nav-disp-ctc'>{/*this.state.Totalctc*/}/-</span>
                </div>
            </div>
    )
}

export default Navbar;
