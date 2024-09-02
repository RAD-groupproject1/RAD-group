import React from 'react'
import StudentNavbar from './studentNavbar'
import '../Admin/Student CRUD/student.css'
import { useEffect, useState } from 'react';
import axios from "axios";

export default function ViewAnnouncement() {
  const [annoucement, setAnnoucement] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:5001/announcement') 
    .then(result=>setAnnoucement(result.data))
    .catch(err=>console.log(err))
},[]);

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
               annoucement.map((annoucement)=>{
                return(
                  <tr key={annoucement.id}>
                      <td>{annoucement.courseId}</td>
                      <td>{annoucement.date}</td>
                      <td>{annoucement.description}</td>
                      
                    
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
