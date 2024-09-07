import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './client/Home';
import './App.css';

//admin
import AdminLogin from './client/Admin/Adminlogin'
import Admin from './client/Admin/Admin'

//student crud
import Student from './client/Admin/Student CRUD/StudentHome';
import Createstudent from './client/Admin/Student CRUD/Createstudent';
import UpdateStudent from './client/Admin/Student CRUD/Updatestudent';

//instructor crud
import Instructor from './client/Admin/Instructor CRUD/InstructorHome';
import Createinstructor from './client/Admin/Instructor CRUD/Createinstructor';
import UpdateInstructor from './client/Admin/Instructor CRUD/Updateinstructor';

//payment crud
import Payments from './client/Admin/Payment CRUD/Payments'
import Addpayment from './client/Admin/Payment CRUD/Addpayment'
import Updatepayment from './client/Admin/Payment CRUD/Updatepayment'

//student
import StudentLogin from './client/student/StudentLogin'
import StudentRegister from './client/student/StudentRegister'
import StudentHome from './client/student/StudentHome'
import ViewCourse from './client/student/ViewCourse'
import ViewAnnoucement from './client/student/ViewAnnouncement'

//instructor
import InsLogin from './client/Instructor/InsLogin';
import InsRegister from './client/Instructor/InsRegister';
import InstructorHome from './client/Instructor/InstructorHome';

//course crud
import Course from './client/Instructor/Course CRUD/Course'
import Addcourse from './client/Instructor/Course CRUD/Addcourse'
import Updatecourse from './client/Instructor/Course CRUD/Updatecourse'

//announcement crud
import Updateannoucement from './client/Instructor/Announcement CRUD/Updateannoucement'  
import Annoucement from './client/Instructor/Announcement CRUD/Annoucement'
import Addannoucement from './client/Instructor/Announcement CRUD/Addannoucement'



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
          <Route path="/admin/instructor/addinstructor" element={<Createinstructor />} />
          <Route path="/admin/instructor/update/:id" element={<UpdateInstructor />} />

          <Route path="/admin/payments" element={<Payments />} />
          <Route path="/admin/payments/addpayment" element={<Addpayment />} />
          <Route path="/admin/payments/update/:id" element={<Updatepayment />} />
       
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
          <Route path="/instructor/course/update/:id" element={<Updatecourse />} />


          <Route path="/instructor/annoucements" element={<Annoucement />} />
          <Route path="/instructor/annoucements/addannoucement" element={<Addannoucement />} />
          <Route path="/instructor/annoucements/update/:id" element={<Updateannoucement/>} />   



          

          
          </Routes>
      </Router>
    </div>
  );
}

export default App;
