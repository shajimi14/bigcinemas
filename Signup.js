import React from 'react'
import './Signup.css';


function Signup() {
  return (
    <div className='style'>
      <div className='wrapper'>
            <form action='' className=''>
                <h1
                >Signup</h1>
                <div className='input-box'>
                    <input type='text' placeholder='Username'  required text-primary/> 
                </div>
                <div className='input-box'>
                    <input type='text' placeholder='Email' required/> 
                </div>
                <div className='input-box'>
                    <input type='text' placeholder='Password' required/> 
                </div>
                <div className='input-box'>
                    <input type='text' placeholder='Confirmpassword' required/> 
                </div>
            </form>
        </div>
      
    </div>
  )
}

export default Signup;
