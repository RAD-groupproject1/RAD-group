import React, { useState} from "react";
import './addstudent.css';
import axios from 'axios'
import { useNavigate } from "react-router-dom";


export default function AddStudent() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [NIC, setNIC] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    axios.post("http://localhost:5001/addstudent", {name,NIC,address,phone,email,birthday})
    .then(result => {
        console.log(result)
        navigate('/admin/student')
    })
    .catch(err=>console.log(err));
}

  return (
    <div className='addstu'>
      <div className='form'>
        <form onSubmit={handleSubmit}>
          <h1 style={{ color: '#140443', textAlign: 'center' }}>ADD STUDENT</h1>
          <br />
          <p className='detail'>Name :</p>
          <input type='text' placeholder='Enter name' style={{ width: '100%' }} name='username'
            onChange={(e) => setName(e.target.value)} required />
          <br /><br />

          <p className='detail'>NIC :</p>
          <input type='text' placeholder='Enter NIC' style={{ width: '100%' }}  pattern='^[0-9]{12}$'
            onChange={(e) => setNIC(e.target.value)} required/>
          <br /><br />

          <p className='detail'>Address :</p>
          <input type='text' placeholder='Enter Address' style={{ width: '100%' }} 
            onChange={(e) => setAddress(e.target.value)} name='address' required />
          <br /><br />

          <p className='detail'>E-mail :</p>
          <input type='email' placeholder='Enter E-mail' style={{ width: '100%' }}
            onChange={(e) => setEmail(e.target.value)} name='email' required/>
          <br /><br />

          <p className='detail'>Telephone No. :</p>
          <input type='tel' placeholder='Enter phone number' style={{ width: '100%' }} pattern='^[0-9]{10}$' title='please enter a valid 10-digit phone number'
            onChange={(e) => setPhone(e.target.value)} name='phone' required/>
          <br /><br />

          <p className='detail'>Birthday :</p>
          <input type='text' placeholder='Enter Birthday' style={{ width: '100%' }} 
            onChange={(e) => setBirthday(e.target.value)} name='birthday' required/>
          <br /><br />
          
          <button type='submit' className='submitStu'>SUBMIT</button>
        </form>
      </div>
    </div>
  );
}
