import React from 'react'
import InsNavbar from '../InsNavbar';
import '../../Admin/Student CRUD/student.css'
import '../instructor.css';
import { useEffect, useState } from 'react';
import axios from "axios";


import { Link, useNavigate } from 'react-router-dom'

export default function Annoucement() {
  const [annoucement, setAnnoucement] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:5001/announcement')  
    .then(result=>setAnnoucement(result.data))
    .catch(err=>console.log(err))
},[]);

function handleDelete(id){
    axios.delete('http://localhost:5001/announcement/'+id) 
   
    .then(res=>{console.log(res)
    window.location.reload()})
    .catch(err => console.log(err))
}

  const navigate = useNavigate();
  const buttonclick=()=>{
    navigate('/instructor/annoucements/addannoucement')   
  }
  return (
    <div ><InsNavbar/>
      <h1 className='title'>Announcements</h1>
      <p className="intro-text">
        Keep your students informed with the latest updates, important notices, and upcoming events related to your courses. 
        Use the "Add Announcement" button to share new information instantly.
      </p>

      <p className="tips-text">
        <strong>Note:</strong> Regular communication helps maintain student engagement and ensures that everyone stays updated. 
        Clearly state the purpose of each announcement to avoid confusion.
      </p>
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
               annoucement.map((annoucement)=>{
                return(
                  <tr key={annoucement.id} >
                      <td>{annoucement.courseId}</td>
                      <td>{annoucement.name}</td>
                      <td>{annoucement.description}</td>
                      
                      <td>
                        <Link to={`/instructor/annoucements/update/${annoucement._id}`}><button>update</button></Link>
                        <button onClick={() => handleDelete(annoucement._id)} >Delete</button>
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
