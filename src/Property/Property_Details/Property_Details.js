import React from 'react'
import { useParams } from 'react-router-dom'
import propertyData from '../Property.json'
import './Property_Details.css'
const Property_Details = () => {
    let value=useParams();
    console.log("Details: ",value);

    let property=propertyData.Property.find((data)=>data.p_id===value.p_id);
    console.log("property: ",property);
    let singleProperty=property.subProperty.find((data)=>data.s_id===value.s_id);
    console.log("Single Property: ",singleProperty);
  return (
    <>
        
        <img src={singleProperty.s_img} alt='property img' className='property_img2'></img>
        <img src={singleProperty.s_img2} alt='property img' className='property_img2'></img>
        
        <h1>{singleProperty.estate}</h1>
        <h5>{singleProperty.s_description}</h5>
        <h4>{singleProperty.Price}</h4>
    </>
  )
}

export default Property_Details