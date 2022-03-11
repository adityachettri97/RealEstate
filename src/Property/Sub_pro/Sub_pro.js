import React from 'react'
import propertyData from '../Property.json'
import {Col, Row, Card} from 'react-bootstrap'
import { Link,useParams } from 'react-router-dom'
import './Sub_pro.css'

const Sub_pro = () => {
  const value=useParams();
  console.log("Value in subpro: ",value);
  let proper=propertyData.Property.find((data)=>data.p_id===value.p_id);
  console.log("Property with SubProperty: ",proper);
  return (
    <>
    <h1>Properties Lists</h1>
    <Row xs={1} md={2} className="g-4">
  { 
  proper.subProperty.map((subpro)=>
  <React.Fragment key={subpro.s_id}>
    <>

    <Col className="csize">
      <Card className="dt">
      <Card.Img variant="top" className="img" src={subpro.s_img}  />
        <Card.Body>
          <Card.Title>{subpro.s_description}</Card.Title>
          <button className="name"><Link className="link" to={`/pDetails/${value.p_id}/${subpro.s_id}`}>Details</Link></button>
        </Card.Body>
      </Card>
    </Col>
   

</>
    </React.Fragment>
    )
  }
    </Row>
    </>
  
  
  
  )}
 
  


export default Sub_pro