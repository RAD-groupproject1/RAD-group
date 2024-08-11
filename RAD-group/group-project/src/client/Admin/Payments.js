import React from 'react'
import Navigate from './Navigate'
import './student.css'
import Paytable from './Paytable'

import { useNavigate } from 'react-router-dom'

export default function Payments() {

  const navigate = useNavigate();
  const buttonclick=()=>{
    navigate('/admin/payments/addpayment')
  }
  return (
    <div className='stuPage'><Navigate/>
      <h1 style={{alignItems:'center',display:'flex',justifyContent:'center',color:'white'}}>Payment Status</h1>
     <button className='add' onClick={buttonclick}>Add Payment</button>
     <div className='table'>< Paytable/></div>
    </div>
  )
}
