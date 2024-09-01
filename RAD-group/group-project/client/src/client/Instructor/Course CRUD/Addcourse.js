import React from 'react'
import '../../Admin/Student CRUD/addstudent.css'
import { useNavigate } from "react-router-dom";

export default function Addcourse() {
  const navigate = useNavigate();
  

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    alert("New course is added!");
    navigate("/instructor/course/addcourse")
    }

  
  return (
    <div className='addstu'>
      <div className='form'>
        <form  onSubmit={handleSubmit}> 
        <h1 style={{ color:'#140443', textAlign: 'center' }}>ADD COURSE</h1>
        <br/>

        <p className='detail'>Course ID:</p>
        <input type='text' placeholder='Enter course-ID' style={{ width:'100%' }} name='username' required />
        <br/><br/>

        <p className='detail'>Course :</p>
        <input type='text' placeholder='Enter course' style={{ width:'100%' }} required />
        <br/><br/>

        <p className='detail'>Course-Day :</p>
        <input type='text' placeholder='Enter day ' style={{ width:'100%' }} required />
        <br/><br/>\

        <p className='detail'>Duration :</p>
        <input type='text' placeholder='Enter course duration' style={{ width:'100%' }} required />
        <br/><br/>

        <p className='detail'>Course-fee :</p>
        <input type='text' placeholder='Enter course-fee' style={{ width:'100%'}} required />
        <br/><br/>

        
        
        <button type='submit' className='submitStu' >SUBMIT</button>
        </form>
      </div>
      
    </div>
  );
}
