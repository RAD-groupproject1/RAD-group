import React from 'react'
import { Link } from 'react-router-dom';
import StudentNavigate from './studentNavbar'

export default function StudentHome() {
  return (
    <div>
     
          <StudentNavigate/>
            <div className="viewhome">
                <h1>View Course</h1>
                <Link to="/student/course"><button className='button-container1'>View</button></Link>
            </div>
            <div className="viewhome">
                <h1>View Announcement</h1>
                <Link to="/student/announcement"><button className='button-container2'>view</button></Link>
            </div>
    </div>
  )
}
