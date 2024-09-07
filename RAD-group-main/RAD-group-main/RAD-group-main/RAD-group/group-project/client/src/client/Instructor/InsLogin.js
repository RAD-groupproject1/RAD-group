import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import '../Admin/admin.css';

const InsLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5001/insAuth/login', { username, password });
      const { token } = response.data;
      // Store the token (e.g., in localStorage or context)
      localStorage.setItem('token', token);
      navigate('/instructor');
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Error logging in');
    }
  };

  return (
    <div className="login-container">
      <h2>Instructor Login</h2>
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
          Don't have an account? <Link to="/instructorRegister">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default InsLogin;
