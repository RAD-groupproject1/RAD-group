import React from 'react';
import './studentNavbar.css'
import { Link } from 'react-router-dom';

const StudentNavBar = () => {

  const logout = ()=> {
    localStorage.removeItem("token");
    window.location.reload();
    window.location = "/student/login";
  } 
    return (
    <div>
      <h1>Learn Link</h1>
      <br/>
      <nav className='stunavnar'>
        <Link to="/"><button>Student Home</button></Link>
        <Link to="/course/view"><button>View Courses</button></Link>
        <Link to="/announcement/view"><button>View Announcement</button></Link>
      <button onClick={logout}>logout</button>
      
      </nav>
    </div>
  );
}

export default StudentNavBar;
