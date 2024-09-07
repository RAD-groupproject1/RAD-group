import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './admin.css';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5001/adminAuth/login', { username, password });
      console.log('Login response:', response);
  
      const { token } = response.data;
  
      if (token) {
        localStorage.setItem('token', token);
        console.log('Token stored:', token);
        navigate('/admin');
      } else {
        console.error('Login failed: No token received');
        alert('Login failed: No token received');
      }
    } catch (error) {
      console.error('Error logging in:', error.response ? error.response.data : error.message);
      alert('Error logging in: ' + (error.response ? error.response.data.message : error.message));
    }
  };

  return (
    <div className="login-container">
      <h2>Admin Login</h2>
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
          Don't have an account? <Link to="/adminRegister">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
