import React from 'react';
import InsNavbar from './InsNavbar';

import './instructor.css';

export default function InstructorHome() {

  
  return (
    <div >
      <InsNavbar />
      <div >
      <h1 className="title">Welcome to the Instructor Dashboard!</h1>
      <p className="welcome-message">
        We are delighted to have you here. This platform is designed to help you manage your courses, interact with students, 
        and stay updated with the latest announcements. Let's make learning an exciting journey together!
      </p>
      <section className="features">
        <h2>Dashboard Features:</h2>
        <ul>
          <li><strong>Course Management:</strong> Create, update, and manage your courses with ease.</li>
          <li><strong>Announcements:</strong> Keep your students informed with the latest updates and important news.</li>
          </ul>
      </section>
      </div>
    </div>
  );
}
