import React from 'react';
//import axios from "axios";
//import { useEffect, useState } from "react";

export default function ViewAnnouncement() {

  /*const [announcements, setAnnouncement] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3000/announcement') 
        .then(result=>setAnnouncement(result.data))
        .catch(err=>console.log(err))
    },[]); */

  return (
    <div>
      <h1>Announcement</h1>
      <table>
        <thead>
          <tr>
            <th>Course ID</th>
            <th>Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {/*announcements.map((announcement)=>{
                        return(
                        <tr>
                            <td>{announcement.courseId}</td>
                            <td>{announcement.date}</td>
                            <td>{announcement.description}</td>
                        </tr>
                        );
                    })*/
                        }
        </tbody>
      </table>
    </div>
  );
}
