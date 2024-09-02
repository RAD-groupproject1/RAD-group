import React from 'react';
import Navigate from './Navigate';
import './admin.css'
import { useState,useEffect } from 'react';

export default function Admin() {

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
      <Navigate />
      <div >
      <h1 className='message'>{welcomeMessage}</h1>
      </div>
    </div>
  );
}
