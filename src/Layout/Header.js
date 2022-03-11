import React from 'react'
import {Nav,Navbar,Container, Button} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import './Header.css' 


export const Header = () => {
  const navigate=useNavigate();
  const loggingOut=()=>{
    window.localStorage.clear();
    navigate('/')
  }
  const isAuth=window.localStorage.getItem('TokenValue');

  return (
    <div>
    <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand as={Link} to="/" className="head">REstate</Navbar.Brand>
      <Nav className="me-auto">
        {/* <Nav.Link as={Link} to="/">Home</Nav.Link> */}
        <Nav.Link as={Link} to="/property_p" className="head">Properties</Nav.Link>
        <Nav.Link as={Link} to="/services_p" className="head">Services</Nav.Link>
         <Nav.Link as={Link} to="/about_p" className="head">About</Nav.Link>
        
        
        <Nav.Link as={Link} to="Profile_p" className="head">Profile</Nav.Link>
        <Nav.Link as={Link} to="/contact_p" className="head"> Contact</Nav.Link>
        <Nav.Link as={Link} to="Reg_p" className="head2">Registration</Nav.Link>
        <Nav.Link as={Link} to="Login_p" className="head3">Login</Nav.Link>
        <>
      {
        isAuth ?
         <Button type='Submit' onClick={loggingOut} className='butn2'>Logout</Button> 
        :
        <> </>
    }
  </>  
        
      </Nav>
      </Container>
    
    </Navbar>
    
  </div>
  )
}
