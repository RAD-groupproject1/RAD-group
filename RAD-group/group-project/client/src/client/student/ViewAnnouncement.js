import React from 'react'
import StudentNavbar from './studentNavbar'
import '../Admin/Student CRUD/student.css'
import { useEffect, useState } from 'react';
import axios from "axios";

export default function ViewAnnouncement() {
  const [annoucement, setAnnoucement] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3000/announcement') 
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
