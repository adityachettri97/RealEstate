import React from 'react';
import {useFormik} from 'formik';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import './Login.css'

export default function Login() {

  const navigate=useNavigate();

  const ValidateForm = (formValue) =>{
    const errors={};
    const reg_exp_email=/^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,10})$/
    const reg_exp_password=/^(?=.*?[A-Za-z])(?=.*?[!@#$%^&*])(?=.*?[0-9]).{4,10}$/

    if(!formValue.email){
        errors.email="Please enter email";
    }else if(!reg_exp_email.test(formValue.email)){
        errors.email="Invalid email";
    }
    if(!formValue.password){
        errors.password="Please enter password";
    }else if(!reg_exp_password.test(formValue.password)){
        errors.password="A minimum 8 characters password contains a combination of uppercase and lowercase letter and number are required."
    }

    console.log("Errors : ",errors);
    return errors;
}

  const formik=useFormik({
    initialValues:{
    email:'',
    password:''
},
validate:ValidateForm,
onSubmit:(values)=>{
  console.log("recived value:",values);

  axios.post('https://nodeprojectapi.herokuapp.com/login',values)
  .then(res=>{
      console.log("Axios Response :",res.data);

      window.localStorage.setItem("TokenValue",res.data.token);
      alert("You have Succesfully logged in");
      navigate('/Profile_p');
  })
  .catch(err=>{
      console.log("Axios Error :",err);
  })

}
})


  return (
  <div className='mylog'>
    <form onSubmit={formik.handleSubmit} className='logform'>
    <label >Email</label><br />
    <input 
    type="email" 
     name="email" 
     id="mail"
     placeholder='Enter Email'
     value={formik.values.email}
      onChange={formik.handleChange} 
      onBlur={formik.handleBlur}
      /><br />
       {formik.touched.email && formik.errors.email ? (<span>{formik.errors.email}</span>) : null}
      <br /> <br/>
  
    <label>Password</label><br />
    <input 
    type="password"  
    name="password" 
    id="pass"
    placeholder='Password'
    value={formik.values.password} 
    onChange={formik.handleChange} 
    onBlur={formik.handleBlur}
    /><br />
     {formik.touched.password && formik.errors.password ? (<span>{formik.errors.password}</span>) : null}
    <br />
  
    <button 
    type='submit'
    disabled={!(formik.isValid && formik.dirty)}>
       Login</button>

 </form>

  </div>
  );
}
