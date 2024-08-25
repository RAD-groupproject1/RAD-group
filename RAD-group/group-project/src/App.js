import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './client/Home';
import AdminLogin from './client/Admin/Adminlogin';
import AdminRegister from './client/Admin/Adminregister';
import Admin from './client/Admin/Admin';
import Student from './client/Admin/Student';
import Addstudent from './client/Admin/Addstudent';
import Instructor from './client/Admin/Instructor';
import Addinstructor from './client/Admin/Addinstructor';
import Payments from './client/Admin/Payments';
import InstructorLogin from './client/InstructorLogin/InstructorLogin';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [currState, setCurrState] = useState("Login");

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/adminLogin' element={<AdminLogin />} />
          <Route path='/adminRegister' element={<AdminRegister />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/student" element={<Student />} />
          <Route path="/admin/student/addstudent" element={<Addstudent />} />
          <Route path="/admin/instructor" element={<Instructor />} />
          <Route path="/admin/instructor/addinstructor" element={<Addinstructor />} />
          <Route path="/admin/payments" element={<Payments />} />
          <Route 
            path="/instructorLogin" 
            element={
              <InstructorLogin 
                currState={currState} 
                setCurrState={setCurrState} 
                setShowLogin={setShowLogin} 
              />
            } 
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
