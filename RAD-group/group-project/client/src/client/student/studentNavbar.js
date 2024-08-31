import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navigate() {
  return (
    <>
    <Navbar style={{backgroundColor:'#140443 ',color:"white"}}>
        <Container>
          <Navbar.Brand href="/student" style={{color:'white',fontSize:"30px"}}>STUDENT</Navbar.Brand>
          <Nav >
            <Nav.Link href="/student" style={{color:'white'}}>HOME</Nav.Link>
            <Nav.Link href="/student/courseView" style={{color:'white'}}>COURSES</Nav.Link>
            <Nav.Link href="/student/annoucementView "style={{color:'white'}}>ANNOUNCEMENTS</Nav.Link>
            
            <Nav.Link href="/" style={{color:'white'}}>LOGOUT</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  );
}

