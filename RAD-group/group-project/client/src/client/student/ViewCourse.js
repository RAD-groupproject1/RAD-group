import React from 'react'
import StudentNavbar from './studentNavbar'
import '../Admin/Student CRUD/student.css'
import { useState } from 'react';


export default function ViewCourse() {
  const [courses, setCourses] = useState([]);

  return (
    <div ><StudentNavbar/>
      <h1 className='stupage'>Courses</h1>
     
     <div style={{marginTop:'100px'}}>
     <table>
        <thead>
            <tr>
                <th>Course ID</th>
                <th>Course Name </th>
                <th>Course Day</th>
                <th>Duration</th>
                <th>Course-Fee</th>
                
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
