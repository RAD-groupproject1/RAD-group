import React from 'react'
import StudentNavbar from './studentNavbar'
import '../Admin/Student CRUD/student.css'
import { useState } from 'react';


export default function ViewAnnouncement() {
  const [annoucements, setAnnoucements] = useState([]);

  
  return (
    <div ><StudentNavbar/>
      <h1 className='stupage'>Annoucements</h1>
     
     <div style={{marginTop:'100px'}}>
     <table>
        <thead>
            <tr>
                <th>Course ID</th>
                <th>Course Name </th>
                <th>Description</th>
                
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
