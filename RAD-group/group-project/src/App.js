import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './client/Home';
import Admin from './client/Admin/Admin'
import Student from './client/Admin/Student';
import Instructor from './client/Admin/Instructor';
import Addstudent from './client/Admin/Addstudent';
import Addinstructor from './client/Admin/Addinstructor';
import Payments from './client/Admin/Payments';
import Addpayment from './client/Admin/Addpayment';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/student" element={<Student />} />
          <Route path="/admin/student/addstudent" element={<Addstudent />} />
          <Route path="/admin/instuctor" element={<Instructor />} />
          <Route path="/admin/instructor/addinstructor" element={<Addinstructor />} />
          <Route path="/admin/payments" element={<Payments/>} />
          <Route path="/admin/payments/addpayment" element={<Addpayment/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
