import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import '../Admin/admin.css';

const InsLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setError('');

    if (!username  || !password) {
      setError('All fields are required');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5001/insAuth/login', { username,  password });
      const { token } = response.data;
      // Store the token (e.g., in localStorage or context)
      localStorage.setItem('token', token);
      navigate('/instructor');
    } catch (error) {
      setError('Error logging in: ' + (error.response ? error.response.data.message : error.message));
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
          pattern='/^[A-Z]{3}-\d{2}-\d{4}$/'
          title='Use your instructorId'
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button onClick={handleLogin}>Login</button>
        {error && <div className="error-message">{error}</div>}
        <p>
          Don't have an account? <Link to="/instructorRegister">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default InsLogin;