import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const AppBar = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home"><h2 className='text-primary'><i className="bi bi-yelp"></i><span>PizzaShop</span></h2></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
        <Nav >
          <Nav.Link href="#home" className='fw-bold'>Home</Nav.Link>
          <Nav.Link href="#menu" className='fw-bold'>Menu</Nav.Link>
          <Nav.Link href="#mustry" className='fw-bold'>MustTry</Nav.Link>
          <Nav.Link href="#contactus" className='fw-bold'>ContactUs</Nav.Link>
         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default AppBar