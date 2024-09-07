import React ,{ useState, useEffect} from 'react'
import '../../Admin/Student CRUD/addstudent.css'
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from 'axios';

export default function Addcourse() {
  const navigate = useNavigate();

  const {id} = useParams();

  const [courseId, setCourseId] = useState('');
  const [course, setCourse] = useState('');
  const [day, setDay] = useState('');
  const [duration, setDuration] = useState('');
  const [fee, setFee] = useState('');

  useEffect(()=>{
    axios.get('http://localhost:5001/course/getCourse/'+id)  
    .then(result=>{console.log(result)
        setCourseId(result.data.courseId);
        setCourse(result.data.course);
        setDay(result.data.day);
        setDuration(result.data.duration);
        setFee(result.data.fee);
    })
    .catch(err=>console.log(err))
},[id]);
  

  
function update(e){
  e.preventDefault();
  axios.put("http://localhost:5001/course/"+id, {courseId,course,day,duration,fee})
  .then(result => {
      console.log(result)
      navigate('/instructor/course')
  })
  .catch(err=>console.log(err));
}

  
  return (
    <div className="addstu">
    <div className="form">
    <form  onSubmit={update}>
        <h2>Update Course</h2>
        
        <div>
            <label className="detail">Course ID :</label>
            <input type="text" placeholder="Enter course ID" style={{ width: '100%' }}
                value={courseId}  onChange={(e) => setCourseId(e.target.value)}
            />
        </div><br />
        <div>
            <label className="detail">Course :</label>
            <input type="text" placeholder="Enter course name" style={{ width: '100%' }}
                value={course} onChange={(e) => setCourse(e.target.value)}
            />
        </div><br />
        <div>
            <label className="detail">Day :</label>
            <input type="text" placeholder="Enter Address" style={{ width: '100%' }}
                value={day} onChange={(e) => setDay(e.target.value)}
            />
        </div><br />
        <div>
            <label className="detail">Duartion :</label>
            <input type="text" placeholder="Enter course duration" style={{ width: '100%' }}
                value={duration} onChange={(e) => setDuration(e.target.value)}
            />
        </div><br />
        
        <div>
            <label className="detail">Course-Fee :</label>
            <input type="text" placeholder="Enter Email" style={{ width: '100%' }}
                value={fee} onChange={(e) => setFee(e.target.value)}
            />
        </div><br />
        
        <button className='submitStu'>Submit</button>
    </form>
</div>
</div>
  );
}
