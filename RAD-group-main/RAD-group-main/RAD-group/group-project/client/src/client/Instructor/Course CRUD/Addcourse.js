import React ,{ useState} from 'react'
import '../../Admin/Student CRUD/addstudent.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Addcourse() {
  const navigate = useNavigate();
  const [courseId, setCourseId] = useState('');
  const [course, setCourse] = useState('');
  const [day, setDay] = useState('');
  const [duration, setDuration] = useState('');
  const [fee, setFee] = useState('');
  

  function handleSubmit(e){
    e.preventDefault(); // Prevent default form submission

    axios.post("http://localhost:5001/course", {courseId, course, day,duration,fee})
    .then(result => {
        console.log(result)
        navigate('/instructor/course')
    })
    .catch(err=>console.log(err));
}

  
  return (
    <div className='addstu'>
      <div className='form'>
        <form  onSubmit={handleSubmit}> 
        <h1 style={{ color:'#140443', textAlign: 'center' }}>ADD COURSE</h1>
        <br/>

        <p className='detail'>Course ID:</p>
        <input type='text' placeholder='Enter course-ID' style={{ width:'100%' }}
        onChange={(e) => setCourseId(e.target.value)} required />
        <br/><br/>

        <p className='detail'>Course :</p>
        <input type='text' placeholder='Enter course' style={{ width:'100%' }} 
        onChange={(e) => setCourse(e.target.value)}required />
        <br/><br/>

        <p className='detail'>Course-Day :</p>
        <input type='text' placeholder='Enter day ' style={{ width:'100%' }} 
        onChange={(e) => setDay(e.target.value)}required />
        <br/><br/>\

        <p className='detail'>Duration :</p>
        <input type='text' placeholder='Enter course duration' style={{ width:'100%' }} 
        onChange={(e) => setDuration(e.target.value)}required />
        <br/><br/>

        <p className='detail'>Course-fee :</p>
        <input type='text' placeholder='Enter course-fee' style={{ width:'100%'}} 
        onChange={(e) => setFee(e.target.value)}required />
        <br/><br/>

        
        
        <button type='submit' className='submitStu' >SUBMIT</button>
        </form>
      </div>
      
    </div>
  );
}
