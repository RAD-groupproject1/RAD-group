import React from 'react';
import Navigate from './Navigate';
import './admin.css'
import adminhome from '../images/adminhome.jpg'
import { useNavigate } from 'react-router-dom';

export default function Admin() {


const navigate=useNavigate();
 const student=()=>{
  navigate('/admin/student')
 }

 const instructor=()=>{
  navigate('/admin/instructor')
 }

  return (
    <div className='admin'>
      <Navigate />
      <div className="banner">
        <div className="banner-content">
          <div className="text-section">
          <section class="dashboard-overview">
            <div class="card">
                <h3>Total Students</h3>
                <p>120</p>
            </div>
            <div class="card">
                <h3>Total Instructors</h3>
                <p>15</p>
            </div>
            <div class="card">
                <h3>Active Courses</h3>
                <p>30</p>
            </div>
            <div class="card">
                <h3>Pending Registrations</h3>
                <p>5</p>
            </div>
        </section>

        <section class="quick-actions">
            <h2>Quick Actions</h2>
            <button onClick={student}>Add New Student</button>
            <button onClick={instructor}>Add New Instructor</button>
            
        </section>
          </div>
          <div className="image-section">
            <img src={adminhome}  />
          </div>
        </div>
      </div>
    </div>
  );
}
