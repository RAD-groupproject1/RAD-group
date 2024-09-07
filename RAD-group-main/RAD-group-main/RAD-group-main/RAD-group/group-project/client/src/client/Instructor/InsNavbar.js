import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function InsNavbar() {
  return (
    <>
    <Navbar style={{backgroundColor:'#140443 ',color:"white"}}>
        <Container>
          <Navbar.Brand href="/instructor" style={{color:'white',fontSize:"30px"}}>INSTRUCTOR</Navbar.Brand>
          <Nav >
            <Nav.Link href="/instructor" style={{color:'white'}}>HOME</Nav.Link>
            <Nav.Link href="/instructor/course" style={{color:'white'}}>COURSE</Nav.Link>
            <Nav.Link href="/instructor/annoucements"style={{color:'white'}}>ANNOUCEMENT</Nav.Link>
            <Nav.Link href="/" style={{color:'white'}}>LOGOUT</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  );
}

