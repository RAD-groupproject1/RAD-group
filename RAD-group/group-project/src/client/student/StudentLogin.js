import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../Admin/adminLogin.css';

const StudentLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'student' && password === 'password') {
      navigate('/student');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <h2>Student Login</h2>
      <div className="login-form">
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button onClick={handleLogin}>Login</button>
        <p>
          Don't have an account? <Link to="/studentRegister">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default StudentLogin;
