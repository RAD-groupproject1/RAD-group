import React from 'react';
import './studentNavbar.css'
import { Link } from 'react-router-dom';

const StudentNavBar = () => {

  const logout = ()=> {
    localStorage.removeItem("token");
    window.location.reload();
    window.location = "/";
  } 
    return (
    <div>
      <h1>Learn Link</h1>
      <br/>
      <nav className='stunavnar'>
        <Link to="/student"><button>Student Home</button></Link>
        <Link to="/student/course"><button>View Courses</button></Link>
        <Link to="/student/announcement"><button>View Announcement</button></Link>
      <button onClick={logout}>logout</button>
      
      </nav>
    </div>
  );
}

export default StudentNavBar;
