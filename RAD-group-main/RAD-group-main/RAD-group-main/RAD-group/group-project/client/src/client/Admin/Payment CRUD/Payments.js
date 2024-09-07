import React from 'react'
import Navigate from '../Navigate'
import '../Student CRUD/student.css'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

export default function Payments() {
  const [payments, setpayments] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:5001/payment') 
    .then(result=>setpayments(result.data))
    .catch(err=>console.log(err))
},[]);

function handleDelete(id){
  axios.delete('http://localhost:5001/payment/'+id)
  .then(res=>{console.log(res)
  window.location.reload()})
  .catch(err => console.log(err))
}

  const navigate = useNavigate();
  const buttonclick=()=>{
    navigate('/admin/payments/addpayment')
  }
  return (
    <div><Navigate/>
      <h1 className='stupage' >Payment Details</h1>
     <button className='add' onClick={buttonclick}>Add Payment</button>
     
     <div style={{marginTop:'150px'}}>
     <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>NIC</th>
                <th>Index.No</th>
                <th>Status</th>
                
                <th>Action</th>
                </tr>
        </thead>
         <tbody>
            {
               payments.map((payment)=>{
                return(
                  <tr>
                      <td>{payment.name}</td>
                      <td>{payment.NIC}</td>
                      <td>{payment.index}</td>
                      <td>{payment.status}</td>
                      
                      
                      <td>
                      <Link to={`/admin/payments/update/${payment._id}`}><button >update</button></Link>
                      <button onClick={(e) => handleDelete(payment._id)} >Delete</button>
                      </td>
                  </tr>
                      );
                    })
                }
        </tbody>
    </table>
    </div>

    </div>
  )
}
