import React from 'react'
import { useNavigate } from "react-router-dom";
import './home.css'
import home1 from './images/home1.png'
import home2 from './images/home2.png'
import home3 from './images/home3.png'
import home5 from './images/home5.png'



const Home=()=>{
  const navigate = useNavigate();
  
 

  const student=()=>{
    navigate('/studentLogin')
  }
  const instructor=()=>{
    navigate('/instructorLogin')
  }

  return (
    <div>

    <div className='homeTop'>
      <h1 className='header'>LEARNING MANAGEMENT SYSTEM</h1><br/><br/>
      <h6 className='subheader'>Explore a New Era of Learning! Your Virtual Classroom Awaits.<br/>
           Experience interactive, flexible learning that adapts to your needs and connects you with a global community.</h6>
       
        <div className='images'>
        <img src={home1} alt='' className='homeImage1' ></img>
        <img src={home3} alt='' className='homeImage3' ></img>
        <img src={home5} alt='' className='homeImage5' ></img>
        <img src={home2} alt='' className='homeImage2' ></img>
        <img src={home5} alt='' className='homeImage5' ></img>
        </div>
    </div>

    <div className='page'>
      
      <h1>CHOOSE YOUR ROLE</h1>
      <div className="container">

        <button className="button" onClick={student}>
          <div className="content">STUDENT</div>
        </button>

        <button className="button" onClick={instructor} >
          <div className="content">INSTRUCTOR</div>
        </button>

        
      </div>   
    </div>
    
    </div>
    
  );

  
};
export default Home;
