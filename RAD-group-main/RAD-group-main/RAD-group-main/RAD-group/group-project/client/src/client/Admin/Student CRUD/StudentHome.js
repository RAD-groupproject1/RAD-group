import React from 'react'
import Navigate from '../Navigate'
import {Link} from "react-router-dom";
import './student.css'
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'

export default function Student() {
  const [students, setstudents] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:5001/addstudent') 
    .then(result=>setstudents(result.data))
    .catch(err=>console.log(err))
},[]);

function handleDelete(id){
  axios.delete('http://localhost:5001/addstudent/'+id)
  .then(res=>{console.log(res)
  window.location.reload()})
  .catch(err => console.log(err))
}

  const navigate = useNavigate();
  const buttonclick=()=>{
    navigate('/admin/student/addstudent')
  }
  return (
    <div><Navigate/>
      <h1 className='stupage' >Student Details</h1>
     <button className='add' onClick={buttonclick}>Add Student</button>

     <div style={{marginTop:'150px'}}>
     <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>NIC</th>
                <th>Address</th>
                <th>Phone</th>
                <th>E-mail</th>
                <th>Birthday</th>
                <th>Action</th>
                </tr>
        </thead>
         <tbody>
            {
               students.map((student)=>{
                return(
                  <tr>
                      <td>{student.name}</td>
                      <td>{student.NIC}</td>
                      <td>{student.address}</td>
                      <td>{student.phone}</td>
                      <td>{student.email}</td>
                      <td>{student.birthday}</td>
                      <td>
                      <Link to={`/admin/student/update/${student._id}`}><button >update</button></Link>
                      <button onClick={(e) => handleDelete(student._id)} >Delete</button>
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
