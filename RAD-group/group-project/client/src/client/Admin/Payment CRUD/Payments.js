import React from 'react'
import Navigate from '../Navigate'
import '../Student CRUD/student.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Payments() {
  const [payments, setpayments] = useState([]);

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
                      <td>{payment.nic}</td>
                      <td>{payment.index}</td>
                      <td>{payment.status}</td>
                      
                      <td>
                        <button>update</button>
                        <button >Delete</button>
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
