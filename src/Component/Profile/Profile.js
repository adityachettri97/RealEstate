import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';



function Profile() {

    const navigate=useNavigate();

    const loggingOut=()=>{
        window.localStorage.clear();
        navigate('/login');
    }

    const [profileState,changeState]=useState({
        prof: []
    })
    useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>{
        console.log("Axios Response :",res.data);
        changeState({prof:res.data})
    })
    .catch(err=>{
        console.log("Axios Error :",err);
    })
},[changeState])

  return (
      <>
<br />
    <React.Fragment>
 
  {profileState.prof.map((props)=>
  <form>
  <label for="fname" className='fname'>  {props.fname}</label>
  <input type="text" placeholder="First Name"
  id="fname" name="fname"
></input>
  <br/> <br/>
  <label for="lname" className='lname'>{props.lname}</label>
  <input type="text" placeholder="Last Name"
  id="lname" name="lname"
 ></input>
 <br/> <br/>

  

</form>

  )}
</React.Fragment>
<Stack  className="butn">
      <Button type='Submit' onClick={loggingOut} variant="contained" color="error">
        Logout
      </Button>
    </Stack>
</>
  )
}

export default Profile