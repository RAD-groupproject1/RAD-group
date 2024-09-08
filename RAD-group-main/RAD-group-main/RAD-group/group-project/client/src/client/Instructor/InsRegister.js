import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Admin/adminRegister.css';

const InsRegister = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');


  const validatePassword = (password) => {
    const passwordPattern = /^[A-Z]{3}-\d{2}-\d{4}$/;
    return passwordPattern.test(password) 
  };
 

  const handleRegister = async () => {
    setError('');

    if (!username) {
      setError('Username is required');
      return;
    }

    if (!validatePassword(password)) {
      alert("Access denied!")
      setError('Please Enter valid InstructorID!');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await axios.post('http://localhost:5001/insAuth/register', { username,  password });
     navigate('/instructorLogin'); // Redirect after 2 seconds
    } catch (error) {
      setError('Error registering user: ' + (error.response ? error.response.data.message : error.message));
    }
  };

  return (
    <div className="register-container">
      <h2>Instructor Register</h2>
      <div className="register-form">
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        
        <input 
          type="password" 
          placeholder="InstructorId" 
          value={password} 
          title='Use your instructorId'
          onChange={(e) => setPassword(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Confirm InstructorId" 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
        />
        <button onClick={handleRegister}>Register</button>
        {error && <div className="error-message">{error}</div>}
       
      </div>
    </div>
  );
};

export default InsRegister;