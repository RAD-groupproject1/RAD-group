import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {useNavigate} from 'react-router-dom';

import axios from "axios";

function Updateannoucement(){

    const navigate = useNavigate();

    const {id} = useParams();

    const [courseId, setCourseid] = useState();
    const [date, setDate] = useState();
    const [description, setDescription] = useState();

    useEffect(()=>{
        axios.get('http://localhost:5001/announcement/getAnnouncement/'+id)  
        .then(result=>{console.log(result)
            setCourseid(result.data.courseId);
            setDate(result.data.date);
            setDescription(result.data.description);
        })
        .catch(err=>console.log(err))
    },[id]);

    function update(e){
        e.preventDefault();
        axios.put("http://localhost:5001/announcement/"+id, {courseId, date, description}) //add n announce
        .then(result => {
            console.log(result)
            navigate('/instructor/annoucements') //instru   and s to the announcemente  // delete n
        })
        .catch(err=>console.log(err));
    }

    return(
        <div className="addstu">
            <div className="form">
            <form  onSubmit={update}>
                <h2>Update Announcement</h2>
                <p className='detail'>Course ID:</p>
        <input type='text' placeholder='Enter course-ID' style={{ width:'100%' }} value={courseId} onChange={(e) => setCourseid(e.target.value)} name='username'  />
        <br/><br/>

        <p className='detail'>Course :</p>
        <input type='text' placeholder='Enter course' style={{ width:'100%' }} value={date} onChange={(e) => setDate(e.target.value)}  />
        <br/><br/>

        <p className='detail'>Message : </p>
        <input type='text' placeholder='Enter message' style={{ width:'100%' ,height:'100px'}} value={description} onChange={(e) => setDescription(e.target.value)}  />
        <br/><br/>


        <button className='submitStu'>Submit</button>
            </form>
        </div>
        </div>
    )
}
export default Updateannoucement;