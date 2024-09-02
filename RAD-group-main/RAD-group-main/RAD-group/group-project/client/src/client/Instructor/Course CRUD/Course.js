import React from 'react'
import InsNavbar from '../InsNavbar';
import '../../Admin/Student CRUD/student.css'
import { useState, useEffect } from 'react';
import axios from "axios";


import { useNavigate ,Link} from 'react-router-dom'

export default function Course() {
  const [courses, setCourses] = useState([]);

   useEffect(()=>{
    axios.get('http://localhost:5001/course')  
    .then(result=>setCourses(result.data))
    .catch(err=>console.log(err))
  },[]);

  function handleDelete(id){
    axios.delete('http://localhost:5001/course/'+id) 
   
    .then(res=>{console.log(res)
    window.location.reload()})
    .catch(err => console.log(err))
}

  const navigate = useNavigate();
  const buttonclick=()=>{
    navigate('/instructor/course/addcourse')
  }

  return (
    <div ><InsNavbar/>
      <h1 className='stupage'>Course Details</h1>
     <button className='add' onClick={buttonclick}>Add Course</button>

     <div style={{marginTop:'150px'}}>
     <table>
        <thead>
            <tr>
                <th>Course ID</th>
                <th>Course Name </th>
                <th>Course Day</th>
                <th>Duration</th>
                <th>Course-Fee</th>
                <th>Action</th>
                </tr>
        </thead>
         <tbody>
            {
               courses.map((course)=>{
                return(
                  <tr key={course.id} >
                    
                      <td>{course.courseId}</td>
                      <td>{course.course}</td>
                      <td>{course.day}</td>
                      <td>{course.duration}</td>
                      <td>{course.fee}</td>
                      <td>
                        <Link to={`/instructor/course/update/${course._id}`}><button>update</button></Link>
                        <button onClick={() => handleDelete(course._id)} >Delete</button>
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
