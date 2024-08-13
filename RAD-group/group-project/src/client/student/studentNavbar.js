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
          <Navbar.Brand href="/student" style={{color:'white',fontSize:"30px"}}>ADMIN</Navbar.Brand>
          <Nav >
            <Nav.Link href="/student" style={{color:'white'}}>HOME</Nav.Link>
            <Nav.Link href="/Course/view" style={{color:'white'}}>VIEWCOURSE</Nav.Link>
            <Nav.Link href="/Announcement/view" style={{color:'white'}}>VIEWANNOUNCEMENT</Nav.Link>
            
            <Nav.Link href="/" style={{color:'white'}}>LOGOUT</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  );
}

