import React from 'react'
import '../Student CRUD/addstudent.css'
import { useNavigate } from "react-router-dom";

export default function Addform() {
  const navigate = useNavigate();
  

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    alert("New payment datail added to the system!");
    navigate('/admin/payments')
    }

  
  return (
    <div className='addstu'>
      <div className='form'>
        <form  onSubmit={handleSubmit}> 
        <h1 style={{ color:'#140443', textAlign: 'center' }}>ADD PAYMENT</h1>
        <br/>
        <p className='detail'>Student NIC :</p>
        <input type='text' placeholder='Enter NIC' style={{ width:'100%' }}  required />
        <br/><br/>

        <p className='detail'>Student Name :</p>
        <input type='text' placeholder='Enter name' style={{ width:'100%' }} name='username' required />
        <br/><br/>

        <p className='detail'>Payment Status</p>
        <input type='text' placeholder='Enter Payment Status' style={{ width:'100%' }} required />
        <br/><br/>

        <p className='detail'>Action :</p>
        <input type='text' placeholder='Enter Action' style={{ width:'100%' }} required />
        <br/><br/>
        
        <button type='submit' className='submitStu' >SUBMIT</button>
        </form>
      </div>
      
    </div>
  );
}
