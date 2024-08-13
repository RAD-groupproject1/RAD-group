import React from 'react'
import { Link } from 'react-router-dom';

export default function StudentHome() {
  return (
    <div>
     
            <div className="viewhome">
                <h1>View Course</h1>
                <Link to="/course/view"><button className='button-container1'>View</button></Link>
            </div>
            <div className="viewhome">
                <h1>View Announcement</h1>
                <Link to="/announcement/view"><button className='button-container2'>view</button></Link>
            </div>
    </div>
  )
}
