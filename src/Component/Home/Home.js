import React from 'react'
import { Carousel } from 'react-bootstrap'
import {Nav,Navbar,Container} from 'react-bootstrap'
import { Form, Button} from 'react-bootstrap'
import Footer from './Footer'
import Quickview from './Quickview'
import './Home.css'

const Home = () => {
  return (
   
    <div>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block"
      src="./images/img4.jpg"
      alt="First slide"
    />
    <Carousel.Caption className="cc">
      <h3>Looking to fulfill your dreams</h3>
      <p>Here we can help you with that</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      src=".\images\img2.jpeg"
      alt="Second slide"
    />

    <Carousel.Caption className="cc">
      <h3>Sweet Home sweet family</h3>
      <p>Make your family better with comfort zone</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      src="./images/img3.jpg"
      alt="Third slide"
    />

    <Carousel.Caption className="cc">
      <h3>Verify your Home</h3>
      <p>We are always there to help you</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<Quickview/>
<Navbar bg="dark" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#" className="nav2">Looking to sell or rent a property?</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
       
        
      </Nav>
      <Form className="d-flex">
      
        
        <Button className="btn1" variant="outline-success">Submit Now</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
<Footer />


 
</div>
 
  )
}

export default Home