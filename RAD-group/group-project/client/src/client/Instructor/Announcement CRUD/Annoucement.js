import React from 'react'
import InsNavbar from '../InsNavbar';
import '../../Admin/Student CRUD/student.css'
import { useState } from 'react';


import { useNavigate } from 'react-router-dom'

export default function Annoucement() {
  const [annoucements, setAnnoucements] = useState([]);

  const navigate = useNavigate();
  const buttonclick=()=>{
    navigate('/instructor/annoucements/addannoucement')
  }
  return (
    <div ><InsNavbar/>
      <h1 className='stupage'>Annoucements</h1>
     <button className='add' onClick={buttonclick}>Add Annoucement</button>

     <div style={{marginTop:'150px'}}>
     <table>
        <thead>
            <tr>
                <th>Course ID</th>
                <th>Course Name </th>
                <th>Description</th>
                <th>Action</th>
                </tr>
        </thead>
         <tbody>
            {
               annoucements.map((annoucement)=>{
                return(
                  <tr>
                      <td>{annoucement.courseId}</td>
                      <td>{annoucement.name}</td>
                      <td>{annoucement.day}</td>
                      <td>{annoucement.duration}</td>
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
