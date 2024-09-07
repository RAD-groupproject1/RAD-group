import React, { useEffect, useState } from 'react';
import StudentNavbar from './studentNavbar';
import './studentHome.css';

import stuhero from '../images/stuhero.jpg';


export default function StudentHome() {

  return (
    <div>
      <StudentNavbar />
      <div className="banner">
        <div className="banner-content">
          <div className="text-section">
            <h1>How our system is useful to you?</h1>
            <span>
              A learning management system (LMS) is a valuable tool for students, providing centralized access to all learning materials and assignments, which helps keep everything organized and easily accessible. 
              It offers flexibility by allowing students to study at their own pace and schedule, accommodating different lifestyles and commitments. 
              <br />An LMS fosters collaboration and communication through discussion forums and group project spaces, enhancing peer and instructor interaction. 
              Additionally, it supports personalized learning paths, catering to individual learning styles and needs. With features like progress tracking and immediate feedback, students can continuously monitor their progress, improve their skills, and stay engaged with their studies.
            </span>
          </div>
          <div className="image-section">
            <img src={stuhero} alt="Student Hero" />
          </div>
        </div>
      </div>
    </div>
  );
}
