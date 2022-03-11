import React from 'react'
import {Row,Col,Card} from 'react-bootstrap'
import  quickData from './Quickview.json'
import {Link,useParams} from 'react-router-dom'
import './Quickview.css'
const Quickview = () => {
    const value=useParams();
    console.log("Value in quick: ",value);
    let quickview=quickData.Quickview.find((data)=>data.p_id==value.pid);
    console.log("Quickview with Property: ",quickview);
  return (
    <>
        
<h1>Quick View</h1>


<Row xs={1} md={3} className="g-4">
   
  { quickview.subQuick.map((quick)=> 
      <React.Fragment key={quick.p_id}>
        <>
        <Col>
      <Card className="dt">
        <Card.Img variant="top" src={quick.p_image} height="250px" width="180px"
        className="carding" ></Card.Img>
        
        <Card.Body>
        <Card.Title className="name">{quick.p_name}<br/>{quick.p_price}</Card.Title>
          
          <Card.Text>
        
          </Card.Text>
        </Card.Body>
      </Card>
    </Col> 
        </>
        </React.Fragment>)
   
  }
</Row>
    </>
  )
}

export default Quickview