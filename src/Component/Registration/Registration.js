import React from 'react'
import './Registration.css'
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Registration = () => {

  const navigate=useNavigate();
 

  const formik=useFormik({
    initialValues:{
      fname:'',
      lname:'',
      email:'',
      password:''
    },
    onSubmit:(values)=>{
      console.log("Received values",values);

      axios.post('https://nodeprojectapi.herokuapp.com/register',values)
      .then(res=>{
        console.log("Axios Response",res);
        alert("You have successfully registered your data");
        navigate('/Login_p')
        
      })
      .catch(err=>{
        console.log("Axios error",err);
      })
    }
  })
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label for="fname" className='fname'>First Name:</label>
        <input type="text" placeholder="First Name"
        id="fname" name="fname"
        value={formik.values.fname} onChange={formik.handleChange} 
        onBlur={formik.handleBlur}></input>
        <br/> <br/>
        <label for="lname" className='lname'>Last Name:</label>
        <input type="text" placeholder="Last Name"
        id="lname" name="lname"
        value={formik.values.lname} onChange={formik.handleChange} 
        onBlur={formik.handleBlur}></input>
        <br/> <br/>
        <label for="mail" className='mail'>Email:</label>
        <input type="email" id="mail" name="email"
        value={formik.values.email} onChange={formik.handleChange} 
        onBlur={formik.handleBlur}></input>
        <br/> <br/>
        <label for="password" className='pass'>Password:</label>
        <input type="text" id="pass" name="password"
        value={formik.values.password} onChange={formik.handleChange} 
        onBlur={formik.handleBlur}></input>
        <br/> <br/>
        <button type="submit" disabled={!(formik.isValid && formik.dirty)}>Submit</button>
        
    
      </form>
    </div>
  )
};

export default Registration;