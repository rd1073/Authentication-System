import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



const Navbartop = () => {
  return (
    <div>
        <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Secure Website</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: Mark Otto
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Profile</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Edit</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Change Password</Nav.Link>
        </Nav.Item>
        <Nav.Item>
           
        </Nav.Item>
      </Nav>
      
    </div>
  )
}

export default Navbartop;
