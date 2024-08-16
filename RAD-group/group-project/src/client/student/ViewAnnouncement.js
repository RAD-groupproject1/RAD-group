import React from 'react';
import Navigate from './studentNavbar'
import './stu.css'

export default function ViewAnnouncement() {

  const Announcements = [
  {
    courseId: 'C001',
    date: '2024/05/20',
    description: 'Final exam date announced'
  },
  {
    courseId: 'C002',
    date: '2024/06/01',
    description: 'Assignment 2 submission deadline',
  }
  ]
  return (
    <div className='stu'><Navigate/>
    <h1 style={{alignItems:'center',display:'flex',justifyContent:'center',color:'white'}}>Announcement</h1>
      <table>
        <thead>
          <tr>
            <th>Course ID</th>
            <th>Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {Announcements.map((announcement)=>{
                        return(
                        <tr key={announcement.courseId}>
                            <td>{announcement.courseId}</td>
                            <td>{announcement.date}</td>
                            <td>{announcement.description}</td>
                        </tr>
                        );
                    })
                        }
        </tbody>
      </table>
    </div>
  );
}
