import React from 'react'
import {Row, Col, Card} from 'react-bootstrap'
import Footer from '../Home/Footer'
import './About.css'
const About = () => {
  return (
    <div>
      <h1>Welcome to Real Estate About Page</h1>
     
      <Row xs={1} md={3} className="g-4">

<Col className="left">
  <Card className="tcard">
  
  
    <Card.Body className="bcard">
      <Card.Title></Card.Title>
      <Card.Text className="ctext">Hi I am Aditya Chettri. I made this project for my completion of React js Course .
        I choose this topic because nowadays in my placce it has become a trend and a new marketing
        policy and I like to update my project and give a really finishing touch and add some more 
        things. I have  learn't many new things and was a really good experience while making this 
        project. I even like to thank Webskitters Academy for sharpening my skills and 
        giving new ideas and knowledge. React js journey with Webskitters Academy was really good.</Card.Text>
    </Card.Body>
  </Card>
</Col>
<Col className="right">
  <Card className="icard">
  
  <Card.Img variant="top" className="img" src="../../../images/abt1.jpg"></Card.Img>
  
    <Card.Body>
      <Card.Title></Card.Title>
     
    </Card.Body>
  </Card>
</Col>


</Row>
<Footer/>
    </div>
  )
}

export default About