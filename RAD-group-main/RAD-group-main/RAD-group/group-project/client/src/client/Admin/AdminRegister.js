import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './adminRegister.css';

const AdminRegister = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  // Secret key
  const secretKey = '@ADMIN';

  const validatePassword = (password) => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(password) && password.includes(secretKey);
  };

  const handleRegister = async () => {
    setError('');

    if (!username) {
      setError('Username is required');
      return;
    }

    if (!validatePassword(password)) {
      alert("Access denied!")
      setError('Password must be in defined Admin structure.Please Enter valid password!');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await axios.post('http://localhost:5001/adminAuth/register', { username, password });
      navigate('/adminLogin');
    } catch (error) {
      console.error('Error registering user:', error.response ? error.response.data : error.message);
      setError('Error registering user: ' + (error.response ? error.response.data.message : error.message));
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
        {error && <div className="error-message">{error}</div>}
      </div>
    </div>
  );
};

export default AdminRegister;
