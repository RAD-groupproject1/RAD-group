import React from 'react'
import Navigate from '../Navigate'
import '../Student CRUD/student.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Instructor() {
  const [instructors, setinstructors] = useState([]);

  const navigate = useNavigate();
  const buttonclick=()=>{
    navigate('/admin/instructor/addinstructor')
  }
  return (
    <div><Navigate/>
      <h1 className='stupage' >Instructor Details</h1>
     <button className='add' onClick={buttonclick}>Add Instructor</button>

     <div style={{marginTop:'150px'}}>
     <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>NIC</th>
                <th>Index.No</th>
                <th>Address</th>
                <th>E-mail</th>
                <th>Phone.No</th>
                <th>Action</th>
                </tr>
        </thead>
         <tbody>
            {
               instructors.map((instructor)=>{
                return(
                  <tr>
                      <td>{instructor.name}</td>
                      <td>{instructor.nic}</td>
                      <td>{instructor.index}</td>
                      <td>{instructor.address}</td>
                      <td>{instructor.mail}</td>
                      <td>{instructor.phone}</td>
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
