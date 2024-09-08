import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './adminRegister.css';

const AdminRegister = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    const passwordPattern = /^(?=.*Admin)(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!username) {
      alert('Username is required');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (!passwordPattern.test(password)) {
      alert('Password must be at least 8 characters long, contain at least one uppercase letter, one digit, and include the word "Admin".');
      return;
    }
  
    try {
      await axios.post('http://localhost:5001/adminAuth/register', { username, password });
      navigate('/adminLogin');
    } catch (error) {
        console.error('Error registering user:', error.response ? error.response.data : error.message);
        alert('Error registering user: ' + (error.response ? error.response.data.message : error.message));
    } 
};


  return (
    <div className="register-container">
      <h2>Admin Register</h2>
      <div className="register-form">
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
        <input 
          type="password" 
          placeholder="Confirm Password" 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
        />
        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
};

export default AdminRegister;
