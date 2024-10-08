import React, {useState} from 'react';
import '../Student CRUD/addstudent.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function AddInstructor() {
  const navigate = useNavigate();
  
  const [name, setName] = useState('');
  const [NIC, setNIC] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');


  function handleSubmit(e){
    e.preventDefault(); 
    axios.post("http://localhost:5001/addinstructor", {name,NIC,address,phone,email})
    .then(result => {
        console.log(result)
        navigate('/admin/instructor')
    })
    .catch(err=>console.log(err));
    }

  
  return (
    <div className='addstu'>
      <div className='form'>
        <form  onSubmit={handleSubmit}> 
        <h1 style={{ color:'#140443', textAlign: 'center' }}>ADD INSTRUCTOR</h1>
        <br/>
        <p className='detail'>Name :</p>
        <input type='text' placeholder='Enter name' style={{ width:'100%' }} name='username' 
          onChange={(e) => setName(e.target.value)} required />
        <br/><br/>

        <p className='detail'>NIC :</p>
        <input type='text' placeholder='Enter NIC' style={{ width:'100%' }} 
          onChange={(e) => setNIC(e.target.value)} />
        <br/><br/>

        <p className='detail'>Address :</p>
        <input type='text' placeholder='Enter Address' style={{ width:'100%' }} 
          onChange={(e) => setAddress(e.target.value)} name='address'/>
        <br/><br/>

        <p className='detail'>E-mail :</p>
        <input type='email' placeholder='Enter E-mail' style={{ width:'100%' }}
          onChange={(e) => setEmail(e.target.value)} name='email' />
        <br/><br/>

        <p className='detail'>Telephone No. :</p>
        <input type='tel' placeholder='Enter phone number' style={{ width:'100%' }} pattern='^[0-9]{10}$' title='please enter a valid 10-digit phone number' 
          onChange={(e) => setPhone(e.target.value)} name='phone'/>
        <br/><br/>

        
        
        <button type='submit' className='submitStu' >SUBMIT</button>
        </form>
      </div>
      
    </div>
  );
}