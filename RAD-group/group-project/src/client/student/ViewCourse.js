import React from 'react';
import Navigate from './studentNavbar'
import './stu.css'

export default function ViewCourse() {

  
  const courses = [
    {
      courseId: 'C001',
      coursename: 'React Basics',
      fee: '100 USD',
      day: 'Monday',
      duration: '4 weeks',
    },
    {
      courseId: 'C002',
      coursename: 'Advanced React',
      fee: '150 USD',
      day: 'Wednesday',
      duration: '6 weeks',
    },
    
  ];

  return (
    <div className='stu'><Navigate/>
    <h1 style={{alignItems:'center',display:'flex',justifyContent:'center',color:'white'}}>Courses</h1>
      <table>
        <thead>
          <tr>
            <th>Course ID</th>
            <th>Course Name</th>
            <th>Course Fee</th>
            <th>Course Day </th>
            <th>Course Duration</th>
          </tr>
        </thead>
        <tbody>
          {
            courses.map((course) => (
              <tr key={course.courseId}>
                <td>{course.courseId}</td>
                <td>{course.coursename}</td>
                <td>{course.fee}</td>
                <td>{course.day}</td>
                <td>{course.duration}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
