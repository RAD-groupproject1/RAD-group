import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './client/Home';
import './App.css';

import AdminLogin from './client/Admin/Adminlogin'
import Admin from './client/Admin/Admin'
import Student from './client/Admin/Student CRUD/StudentHome';
import Createstudent from './client/Admin/Student CRUD/Createstudent';
import UpdateStudent from './client/Admin/Student CRUD/Updatestudent';

import Instructor from './client/Admin/Instructor CRUD/Instructor'
import Addinstructor from './client/Admin/Instructor CRUD/Addinstructor'
import Payments from './client/Admin/Payment CRUD/Payments'
import Addpayment from './client/Admin/Payment CRUD/Addpayment'

import StudentLogin from './client/student/StudentLogin'
import StudentRegister from './client/student/StudentRegister'
import StudentHome from './client/student/StudentHome'
import ViewCourse from './client/student/ViewCourse'
import ViewAnnoucement from './client/student/ViewAnnouncement'

import InsLogin from './client/Instructor/InsLogin';
import InsRegister from './client/Instructor/InsRegister';
import InstructorHome from './client/Instructor/InstructorHome';
import Course from './client/Instructor/Course CRUD/Course'
import Annoucement from './client/Instructor/Announcement CRUD/Annoucement'
import Addannoucement from './client/Instructor/Announcement CRUD/Addannoucement'
import Addcourse from './client/Instructor/Course CRUD/Addcourse'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path='/adminLogin' element={<AdminLogin/>}/>
         
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/student" element={<Student />} />
          <Route path="/admin/student/addstudent" element={<Createstudent />} />
          <Route path="/admin/student/update/:id" element={<UpdateStudent />} />
          <Route path="/admin/instructor" element={<Instructor />} />
          <Route path="/admin/instructor/addinstructor" element={<Addinstructor />} />
          <Route path="/admin/payments" element={<Payments />} />
          <Route path="/admin/payments/addpayment" element={<Addpayment />} />
       
          <Route path="/studentLogin" element={<StudentLogin />} />
          <Route path="/studentRegister" element={<StudentRegister />} />
          <Route path="/student" element={<StudentHome />} />
          <Route path="/student/courseView" element={<ViewCourse />} />
          <Route path="/student/annoucementView" element={<ViewAnnoucement />} />

          <Route path="/instructorLogin" element={<InsLogin />} />
          <Route path="/instructorRegister" element={<InsRegister />} />
          <Route path="/instructor" element={<InstructorHome />} />
          <Route path="/instructor/course" element={<Course />} />
          <Route path="/instructor/course/addcourse" element={<Addcourse />} />
          <Route path="/instructor/annoucements" element={<Annoucement />} />
          <Route path="/instructor/annoucements/addannoucement" element={<Addannoucement />} />



          

          
          </Routes>
      </Router>
    </div>
  );
}

export default App;
