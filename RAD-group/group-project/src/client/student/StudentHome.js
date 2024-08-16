import React, { useState, useEffect } from 'react';
import StudentNavigate from './studentNavbar';
import './StudentHome.css'

export default function WelcomeMessage() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    
    const today = new Date();
    const hour = today.getHours();

    
    let message;
    if (hour < 12) {
      message = 'Good Morning';
    } else if (hour < 18) {
      message = 'Good Afternoon';
    } else {
      message = 'Good Evening';
    }

    
    setGreeting(message);
  }, []); 

  return (
    <div className='student'>
      <StudentNavigate />
      <div>
        <h1>{greeting}</h1>
      </div>
    </div>
  );
}
