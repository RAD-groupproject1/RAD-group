import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './client/Home';
import './App.css';

import AdminLogin from './client/Admin/Adminlogin'
import AdminRegister from './client/Admin/Adminregister'
import Admin from './client/Admin/Admin'
import Student from './client/Admin/Student';
import Addstudent from './client/Admin/Addstudent';
import Instructor from './client/Admin/Instructor'
import Addinstructor from './client/Admin/Addinstructor'
import Payments from './client/Admin/Payments'

import StudentNavBar from './student/studentNavbar';
import StudentHome from './student/StudentHome';
import ViewCourse from './student/ViewCourse';
import ViewAnnouncement from './student/ViewAnnouncement';
import StudentLogin from './student/Login/stuLogin';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/adminLogin' element={<AdminLogin/>}/>
          <Route path='/adminRegister' element={<AdminRegister/>}></Route>
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/student" element={<Student />} />
          <Route path="/admin/student/addstudent" element={<Addstudent />} />
          <Route path="/admin/instructor" element={<Instructor />} />
          <Route path="/admin/instructor/addinstructor" element={<Addinstructor />} />
          <Route path="/admin/payments" element={<Payments />} />
       
          <Route path="/Student/Login" element={<StudentLogin />} />
          <Route path="*" element={
            <>
              <StudentNavBar />
              <Routes>
                <Route path="/studenthome" element={<StudentHome />} />
                <Route path="/Course/view" element={<ViewCourse />} />
                <Route path="/Announcement/view" element={<ViewAnnouncement />} />
                </Routes>  
        </>
          } 
          />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
