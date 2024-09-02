import React, {useState ,useEffect} from 'react'
import '../Student CRUD/addstudent.css'
import axios from 'axios'
import { useNavigate, useParams} from "react-router-dom";

export default function Addform() {
  const navigate = useNavigate();

  const {id} = useParams();

  const [name, setName] = useState('');
  const [NIC, setNIC] = useState('');
  const [index, setIndex] = useState('');
  const [status, setStatus] = useState('');
 

  useEffect(()=>{
    axios.get('http://localhost:5001/payment/getPayment/'+id) 
    .then(result=>{console.log(result)
       
        setName(result.data.name);
        setNIC(result.data.NIC);
        setIndex(result.data.index);
        setStatus(result.data.status);
       
    })
    .catch(err=>console.log(err))
},[id]);


  
function update(e){
    e.preventDefault();
    axios.put("http://localhost:5001/payment/"+id, {name,NIC, index,status})
    .then(result => {
        console.log(result)
        navigate('/admin/payments')
    })
    .catch(err=>console.log(err));
}

  
  return (
    <div className='addstu'>
      <div className='form'>
        <form  onSubmit={update}> 
        <h1 style={{ color:'#140443', textAlign: 'center' }}>Update Payment</h1>
        <br/>
        

        <p className='detail'>Student Name :</p>
        <input type='text' placeholder='Enter name' style={{ width:'100%' }} name='username' value={name}
        onChange={(e) => setName(e.target.value)} required />
        <br/><br/>

        <p className='detail'>Student NIC :</p>
        <input type='text' placeholder='Enter NIC' style={{ width:'100%' }}  value={NIC}
        onChange={(e) => setNIC(e.target.value)} required />
        <br/><br/>

        <p className='detail'>Index No. :</p>
        <input type='text' placeholder='Enter index number' style={{ width:'100%' }}value={index}
        onChange={(e) => setIndex(e.target.value)}  required />
        <br/><br/>

        <p className='detail'>Status :</p>
        <input type='text' placeholder='Enter payment status' style={{ width:'100%' }} value={status}
        onChange={(e) => setStatus(e.target.value)}  required />
        <br/><br/>

        
        <button type='submit' className='submitStu' >SUBMIT</button>
        </form>
      </div>
      
    </div>
  );
}
