import React, { useState } from 'react';
import '../Student CRUD/addstudent.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Addform() {
  const navigate = useNavigate();
  
  const [name, setName] = useState('');
  const [NIC, setNIC] = useState('');
  const [index, setIndex] = useState('');
  const [status, setStatus] = useState('');
 
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    axios.post("http://localhost:5001/payment", { name, NIC, index, status })
      .then(result => {
        console.log(result);
        alert("New payment detail added to the system!");
        navigate('/admin/payments');
      })
      .catch(err => console.log(err));
  }

  return (
    <div className='addstu'>
      <div className='form'>
        <form onSubmit={handleSubmit}> 
          <h1 style={{ color: '#140443', textAlign: 'center' }}>ADD PAYMENT</h1>
          <br/>
          
          <p className='detail'>Student Name :</p>
          <input 
            type='text' 
            placeholder='Enter name' 
            style={{ width: '100%' }} 
            name='username' 
            value={name}
            onChange={(e) => setName(e.target.value)} 
            required 
          />
          <br/><br/>

          <p className='detail'>Student NIC :</p>
          <input 
            type='text' 
            placeholder='Enter NIC' 
            style={{ width: '100%' }}  
            value={NIC}
            onChange={(e) => setNIC(e.target.value)} 
            required 
          />
          <br/><br/>

          <p className='detail'>Index No. :</p>
          <input 
            type='text' 
            placeholder='Enter index number' 
            style={{ width: '100%' }}
            value={index}
            onChange={(e) => setIndex(e.target.value)}  
            required 
          />
          <br/><br/>

          <p className='detail'>Status :</p>
          <input 
            type='text' 
            placeholder='Enter payment status' 
            style={{ width: '100%' }}
            value={status}
            onChange={(e) => setStatus(e.target.value)}  
            required 
          />
          <br/><br/>

          
          <button type='submit' className='submitStu'>SUBMIT</button>
        </form>
      </div>
    </div>
  );
}
