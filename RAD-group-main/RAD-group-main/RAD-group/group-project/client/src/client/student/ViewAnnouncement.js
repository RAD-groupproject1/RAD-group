import React from 'react'
import StudentNavbar from './studentNavbar'
import '../Admin/Student CRUD/student.css'
import './studentHome.css'
import { useEffect, useState } from 'react';
import axios from "axios";
import image from '../images/roles.png'
import { useNavigate } from 'react-router-dom';

export default function ViewAnnouncement() {
  const [annoucement, setAnnoucement] = useState([]);
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

 

  useEffect(()=>{
    axios.get('http://localhost:5001/announcement') 
    .then(result=>setAnnoucement(result.data))
    .catch(err=>console.log(err))
},[]);

  return (
    <div ><StudentNavbar/>

<section className="vaccine-info">
        <div className="main-content">
            <h2 className="section-title">ANNOUNCEMENTS</h2>
            
            <p className="description">
            Welcome to your Announcements Page, your central hub for staying informed about the latest updates and important notices from your instructors. 
            This page is designed to keep you connected with all the essential information you need to enhance your learning experience.
            <br/><br/> Whether it's updates on course content, changes in deadlines, upcoming events, or any other relevant news, announcements are a key component in ensuring you’re well-informed and up-to-date. 
            By regularly checking this page, you’ll be able to keep track of critical details that can impact your studies, enabling you to stay organized and effectively manage your academic responsibilities. 
            <br/><br/>Make sure to visit this page frequently so you never miss out on important information that could enhance your educational journey.
            </p>
        </div>
        
          <img src={image}/>
        
    </section>

  
     <div style={{marginTop:'100px',marginBottom:'500px'}}>
     <table>
        <thead>
            <tr>
                <th>Course ID</th>
                <th>Course Name </th>
                <th>Description</th>
                
                </tr>
        </thead>
         <tbody>
            {
               annoucement.map((annoucement)=>{
                return(
                  <tr key={annoucement.id}>
                      <td>{annoucement.courseId}</td>
                      <td>{annoucement.date}</td>
                      <td>{annoucement.description}</td>
                      
                    
                  </tr>
                      );
                    })
                }
        </tbody>
    </table>
    </div>
     
    </div>
  )
}
