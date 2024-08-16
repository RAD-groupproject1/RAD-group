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

import StudentLogin from './client/student/StudentLogin'
import StudentRegister from './client/student/StudentRegister'
import StudentHome from './client/student/StudentHome'

import ViewCourse from './client/student/ViewCourse';
import ViewAnnouncement from './client/student/ViewAnnouncement';



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
       
          <Route path="/studentLogin" element={<StudentLogin />} />
          <Route path="/studentRegister" element={<StudentRegister />} />
          <Route path="/student" element={<StudentHome />} />
          <Route path="/Course/View" element={<ViewCourse />} />
          <Route path='/Announcement/View'element={<ViewAnnouncement/>} />
          
          </Routes>
      </Router>
    </div>
  );
}

export default App;
