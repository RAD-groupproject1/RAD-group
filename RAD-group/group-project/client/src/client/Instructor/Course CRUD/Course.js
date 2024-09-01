import React from 'react'
import InsNavbar from '../InsNavbar';
import '../../Admin/Student CRUD/student.css'
import { useState } from 'react';


import { useNavigate } from 'react-router-dom'

export default function Course() {
  const [courses, setCourses] = useState([]);

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
                  <tr>
                      <td>{course.courseId}</td>
                      <td>{course.name}</td>
                      <td>{course.day}</td>
                      <td>{course.duration}</td>
                      <td>{course.fee}</td>
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
