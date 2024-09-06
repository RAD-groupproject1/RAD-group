import React from 'react'
import StudentNavbar from './studentNavbar'
import '../Admin/Student CRUD/student.css'
import './studentHome.css'
import { useState, useEffect } from 'react';
import axios from "axios";
import stu1 from '../images/stu1.png'
import { useNavigate } from 'react-router-dom';

export default function ViewCourse() {
  const [courses, setCourses] = useState([]);


  

  useEffect(()=>{
    axios.get('http://localhost:5001/course') 
    .then(result=>setCourses(result.data))
    .catch(err=>console.log(err))
},[]);

  return (
    <div ><StudentNavbar/>

<section className="vaccine-info">
        <div className="main-content">
            <h2 className="section-title">COURSES</h2>
            
            <p className="description">
            Welcome to our dynamic learning platform, where your journey to enhancing your skills and knowledge begins! Here, you'll find a vast array of meticulously designed courses that cater to diverse interests and career aspirations. 
            <br/><br/>Our platform empowers you to explore a rich catalog of subjects at your own pace, allowing you the flexibility to tailor your learning experience to fit seamlessly into your schedule. 
            Whether you’re looking to deepen your expertise in a current field, venture into new areas of interest, or pursue personal passions, our courses offer valuable insights and practical knowledge delivered by industry experts. 
            With a focus on interactive learning and real-world application, you’ll have access to engaging content, hands-on exercises, and supportive resources. 
          <br/><br/>  Plus, earning certificates upon course completion not only helps you track your progress but also enhances your professional credentials. 
            Dive in, select the courses that resonate with you, and embark on a fulfilling learning journey with us today!
            </p>
        </div>
        <div className="callout-box">
            
            <h3 className="callout-heading">Which courses we offered </h3>
            <p className="callout-description"><h5>Technology:</h5> Programming, Web Development, Data Science, etc.<br/>
                                              <br/> <h5>Business:</h5> Marketing, Finance, Entrepreneurship, etc.<br/>
                                               <br/><h5>Arts & Humanities: </h5>Literature, History, Philosophy, etc.<br/>
                                               <br/><h5>Science:</h5> Biology, Chemistry, Physics, etc.</p>
            
        </div>
    </section>
     

     <h1 style={{color:'#E30575'}}>Courses you can follow now </h1>
     <div style={{marginTop:'100px'}}>
     <table>
        <thead>
            <tr>
                <th>Course ID</th>
                <th>Course Name </th>
                <th>Course Day</th>
                <th>Duration</th>
                <th>Course-Fee</th>
                
                </tr>
        </thead>
         <tbody>
            {
               courses.map((course)=>{
                return(
                  <tr key={course.id}>
                      <td>{course.courseId}</td>
                      <td>{course.course}</td>
                      <td>{course.day}</td>
                      <td>{course.duration}</td>
                      <td>{course.fee}</td>
                    
                  </tr>
                      );
                    })
                }
        </tbody>
    </table>
    </div>
    <div  className='bottom'>
     <img src={stu1}/> </div>
    </div>
  )
}
