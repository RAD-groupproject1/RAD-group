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
          <Navbar.Brand href="/admin" style={{color:'white',fontSize:"30px"}}>ADMIN</Navbar.Brand>
          <Nav >
            <Nav.Link href="/admin" style={{color:'white'}}>HOME</Nav.Link>
            <Nav.Link href="/admin/student" style={{color:'white'}}>STUDENT</Nav.Link>
            <Nav.Link href="/admin/instructor" style={{color:'white'}}>INSTRUCTOR</Nav.Link>
            <Nav.Link href="/admin/payments" style={{color:'white'}}>PAYMENTS</Nav.Link>
            <Nav.Link href="/" style={{color:'white'}}>LOGOUT</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  );
}

