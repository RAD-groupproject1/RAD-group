import React from 'react'
import './addstudent.css'
import { useNavigate } from "react-router-dom";

export default function Addform() {
  const navigate = useNavigate();
  

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    alert("New student is added to the system!");
    navigate('/admin/student')
    }

  
  return (
    <div className='addstu'>
      <div className='form'>
        <form  onSubmit={handleSubmit}> 
        <h1 style={{ color:'#140443', textAlign: 'center' }}>ADD STUDENT</h1>
        <br/>
        <p className='detail'>Name :</p>
        <input type='text' placeholder='Enter name' style={{ width:'100%' }} name='username' required />
        <br/><br/>

        <p className='detail'>NIC :</p>
        <input type='text' placeholder='Enter NIC' style={{ width:'100%' }} required />
        <br/><br/>

        <p className='detail'>Address :</p>
        <input type='text' placeholder='Enter Address' style={{ width:'100%' }} required />
        <br/><br/>

        <p className='detail'>E-mail :</p>
        <input type='email' placeholder='Enter E-mail' style={{ width:'100%' }} required />
        <br/><br/>

        <p className='detail'>Telephone No. :</p>
        <input type='tel' placeholder='Enter phone number' style={{ width:'100%' }} pattern='^[0-9]{10}$' title='please enter a valid 10-digit phone number' required />
        <br/><br/>

        <p className='detail'>Birthday :</p>
        <input type='text' placeholder='Enter Birthday' style={{ width:'100%' }} required />
        <br/><br/>
        
        <button type='submit' className='submitStu' >SUBMIT</button>
        </form>
      </div>
      
    </div>
  );
}
