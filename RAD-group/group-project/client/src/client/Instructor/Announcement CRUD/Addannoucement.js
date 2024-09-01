import React from 'react'
import '../../Admin/Student CRUD/addstudent.css'
import { useNavigate } from "react-router-dom";

export default function AddAnnoucement() {
  const navigate = useNavigate();
  

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    alert("Annoucement is published successfully!");
    navigate("/instructor/annoucements")
    }

  
  return (
    <div className='addstu'>
      <div className='form'>
        <form  onSubmit={handleSubmit}> 
        <h1 style={{ color:'#140443', textAlign: 'center' }}>ADD ANNOUCEMENT</h1>
        <br/>

        <p className='detail'>Course ID:</p>
        <input type='text' placeholder='Enter course-ID' style={{ width:'100%' }} name='username' required />
        <br/><br/>

        <p className='detail'>Course :</p>
        <input type='text' placeholder='Enter course' style={{ width:'100%' }} required />
        <br/><br/>

        <p className='detail'>Message : </p>
        <input type='text' placeholder='Enter message' style={{ width:'100%' ,height:'100px'}} required />
        <br/><br/>

        
        
        <button type='submit' className='submitStu' >SUBMIT</button>
        </form>
      </div>
      
    </div>
  );
}
