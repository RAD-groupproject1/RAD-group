import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './client/Home';
import Admin from './client/Admin/Admin'
import Student from './client/Admin/Student';

import Addstudent from './client/Admin/Addstudent'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/student" element={<Student />} />
          <Route path="/admin/student/addstudent" element={<Addstudent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
