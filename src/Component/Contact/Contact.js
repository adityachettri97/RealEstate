import React from 'react'
import {Row, Col, Card} from 'react-bootstrap'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import Footer from '../Home/Footer'
import './Contact.css'
const Contact = () => {
  return (
    <div>
      <h1>Contact us</h1>
      <Row xs={1} md={4} className="g-4">

<Col className="left2">
  <Card className="brd">
  
  
    <Card.Body className="by">
      <Card.Title><LocationOnIcon className="office"/>Office Address</Card.Title>
      <Card.Text>Maruti Apartment, 1 Floor, Near Pragati College, Siliguri-734010</Card.Text>
      <Card.Title><PhoneInTalkIcon className="phone"/>Phone Number</Card.Title>
      <Card.Text>office: +917001230072</Card.Text> 
      <Card.Text>Mobile: +918972151870</Card.Text>
      <Card.Title><EmailIcon className="mail"/>Email Address</Card.Title>
      <Card.Text>adiswagger@gmail.com</Card.Text>
      <Card.Text>adityachettri211@gmail.com</Card.Text>
    </Card.Body>
  </Card>
</Col>
<Col className="right2">
  <Card className="brd2">
  
  
  
    <Card.Body>
    <form>
                <label for="fullname"></label>
                <input type="text" placeholder="Fullname" 
                id="fname" name="fullname"></input>
                
                <br></br><br></br>
                <label for="email"></label>
                <input type="email" placeholder="Enter Email" 
                id="mail" name="email"></input>
               
                <br></br><br></br>
                <label for="number"></label>
                <input type="number" placeholder="10 digit mobile number" 
                id="number" name="number"></input>
                <br></br><br></br>
                <label for="text"></label>
                <textarea id="text" name="text">Write message</textarea>
                <br></br><br></br>
                <button type="submit" id="btn">
                  <span class="btn_txt">Contact</span>
                    </button>

               
      </form>
     
    </Card.Body>
  </Card>
</Col>


</Row>
<Footer/>
    </div>
  )
}

export default Contact