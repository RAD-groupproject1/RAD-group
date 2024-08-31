import React from 'react';
import InsNavbar from './InsNavbar';
import '../Admin/admin.css'
import { useState,useEffect } from 'react';

export default function InstructorHome() {

  const [welcomeMessage, setWelcomeMessage] = useState('');

  useEffect(() => {
    const currentHour = new Date().getHours();
    let message = '';

    if (currentHour < 12) {
      message = 'Hello Good Morning!';
    } else if (currentHour < 18) {
      message = 'Hello Good Afternoon!';
    } else {
      message = 'Hello Good Evening!';
    }

    setWelcomeMessage(message);
  }, []);

  return (
    <div className='admin'>
      <InsNavbar />
      <div >
      <h1 className='message'>{welcomeMessage}</h1>
      </div>
    </div>
  );
}
