import React ,{ useState} from 'react'
import '../../Admin/Student CRUD/addstudent.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function AddAnnoucement() {
  const navigate = useNavigate();
  
  const [courseId, setCourseId] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
 
function handleSubmit(e){
        e.preventDefault();
        axios.post("http://localhost:5001/announcement", {courseId, date, description})
        .then(result => {
            console.log(result)
            navigate('/instructor/annoucements')
        })
        .catch(err=>console.log(err));
    }
   return (
    <div className='addstu'>
      <div className='form'>
        <form  onSubmit={handleSubmit}> 
        <h1 style={{ color:'#140443', textAlign: 'center' }}>ADD ANNOUCEMENT</h1>
        <br/>

        <p className='detail'>Course ID:</p>
        <input type='text' placeholder='Enter course-ID' style={{ width:'100%' }}  onChange={(e) => setCourseId(e.target.value)} name='username' required />
        <br/><br/>

        <p className='detail'>Course :</p>
        <input type='text' placeholder='Enter course' style={{ width:'100%' }} onChange={(e) => setDate(e.target.value)} required />
        <br/><br/>

        <p className='detail'>Message : </p>
        <input type='text' placeholder='Enter message' style={{ width:'100%' ,height:'100px'}} onChange={(e) => setDescription(e.target.value)} required />
        <br/><br/>

        
        
        <button type='submit' className='submitStu' >SUBMIT</button>
        </form>
      </div>
      
    </div>
  );
}