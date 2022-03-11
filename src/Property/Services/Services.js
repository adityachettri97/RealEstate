import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CloudDoneOutlinedIcon from '@mui/icons-material/CloudDoneOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import DeveloperModeOutlinedIcon from '@mui/icons-material/DeveloperModeOutlined';
import Footer from '../../Component/Home/Footer'
import './Services.css';
const Services = () => {
  return (
    <div>
        <h1>Services</h1>
        <Row xs={1} md={3} className="g-4">

    <Col>
      <Card className="card1">
      
      <HomeWorkOutlinedIcon fontSize="large" className="Icon"/>
        <Card.Body>
          <Card.Title className="title">Real Estate</Card.Title>
          
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card className="card1">
      
        <AccountBalanceIcon fontSize="large" className="Icon"/>
        <Card.Body>
          <Card.Title className="title">Finance</Card.Title>
         
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card className="card1">
        <LockOutlinedIcon fontSize="large" className="Icon"/>
        <Card.Body>
          <Card.Title className="title">Registration and Mutation</Card.Title>
          
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card className="card1">
        <CloudDoneOutlinedIcon fontSize="large" className="Icon"/>
        <Card.Body>
          <Card.Title className="title">Searching/Title Verification</Card.Title>
          
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card className="card1">
      <AccountBalanceWalletOutlinedIcon fontSize="large" className="Icon"/>
        <Card.Body>
          <Card.Title className="title">Investment</Card.Title>
         
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card className="card1">
      <FactCheckOutlinedIcon fontSize="large"  className="Icon"/>
        <Card.Body>
          <Card.Title className="title">Tax Consultancy</Card.Title>
          
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card className="card1">
      <MenuBookOutlinedIcon fontSize="large"  className="Icon"/>
        <Card.Body>
          <Card.Title className="title">Feasibility Study</Card.Title>
          
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card className="card1">
      <DeveloperModeOutlinedIcon fontSize="large"  className="Icon"/>
        <Card.Body>
          <Card.Title className="title">Project Development</Card.Title>
          
        </Card.Body>
      </Card>
    </Col>

</Row>
<Footer/>
    </div>
  )
}

export default Services