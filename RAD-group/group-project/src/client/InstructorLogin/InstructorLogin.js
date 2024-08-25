import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InstructorLogin.css';

const InstructorLogin = ({ setShowLogin, currState, setCurrState }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <button type="button" className="close-button" onClick={handleClose}>
            X
          </button>
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign Up" && <input type="text" placeholder='User name' required />}
          <input type="email" placeholder='Your email' required />                                            
          <input type="password" placeholder='Password' required />                                            
          {currState === "Sign Up" && <input type="password" placeholder='Confirm Password' required />}
        </div>
        <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>
        {currState === "Login"
          ? <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
          : <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
        }  
      </form>
    </div>
  );
};

export default InstructorLogin;
