import React from 'react'
import proData from '../Property.json'
import {Link} from 'react-router-dom'
import {Row,Col,Card} from 'react-bootstrap'
import './Property.css'

const Property_cat = () => {
  return (
    <>
        <h1>Properties Listing</h1>

        <Row xs={1} md={2} className="g-4">
        {
            proData.Property.map((property)=>
            <React.Fragment  key={property.p_id}>
              <>
            
              
          
    <Col className="csize">
    
      <Card className="dt" >
      
        <Card.Img variant="top" className="img" src={property.p_image}  />
        <Card.Body>
          <Card.Title></Card.Title>
          <button className="name"><Link className="link" to={`/sub_pro/${property.p_id}`}>{property.p_name}</Link></button>
          
        </Card.Body>
      </Card>
    </Col>
    </>
    </React.Fragment>
            )
}

</Row>
        <ul>
         
        </ul>
    </>
  )
}

export default Property_cat