import React from 'react'
import Navigate from './Navigate'
import './student.css'
import Stutable from './Stutable'

import { useNavigate } from 'react-router-dom'

export default function Instructor() {

  const navigate = useNavigate();
  const buttonclick=()=>{
    navigate('/admin/instructor/addinstructor')
  }
  return (
    <div className='stuPage'><Navigate/>
      <h1 style={{alignItems:'center',display:'flex',justifyContent:'center',color:'white'}}>Instructors Details</h1>
     <button className='add' onClick={buttonclick}>Add Instructor</button>
     <div className='table'>< Stutable/></div>
    </div>
  )
}
