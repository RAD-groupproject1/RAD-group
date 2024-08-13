import React from 'react'
import './stuLogin.css'

export default function stuLogin() {
  return (
    <div className='wrapper'>
        <div className='form-box login'>
            <form action=''>
                <h1>Login</h1>
                <div className='input-box'>
                    <input type='text' placeholder='Username' required/>
                </div>
                <br/>
                <div className='input-box'>
                    <input type='password' placeholder='Password' required/>
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>
        <br/>

        <div className='form-box register'>
            <form action=''>
                <h1>Register</h1>
                <div className='input-box'>
                    <input type='text' placeholder='Username' required/>
                </div>
                <br/>
                <div className='input-box'>
                    <input type='password' placeholder='Password' required/>
                </div>
                <button type='submit'>Register</button>
            </form>
        </div>

     
    </div>
  )
}
