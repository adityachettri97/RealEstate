import React, {Suspense} from 'react'
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import { Header } from '../Layout/Header'
import Home from '../Component/Home/Home'
import About from '../Component/About/About'
import Contact from '../Component/Contact/Contact'
import Property_cat from '../Property/Property_cat/Property_cat'
import Sub_pro from '../Property/Sub_pro/Sub_pro'
import Property_Details from '../Property/Property_Details/Property_Details'
import Services from '../Property/Services/Services'
import Login from '../Authentication/Login/Login'
import Registration from '../Component/Registration/Registration'
import Profile from '../Authentication/Profile/Profile'

import ProtectedRoutes from './ProtectedRoutes'


const Routing = () => {
  return (
    <Router>
        <Header/>
        <Suspense fallback={<h1>Loading....</h1>}>
        <Routes>
        <Route element={<ProtectedRoutes/>}>
            
            
            
            <Route path="Profile_p" element={<Profile/>}></Route>
            
            
            </Route>
            <Route path="" element={<Home/>}> </Route>
           
            <Route path="Reg_p" element={<Registration/>}></Route>
            <Route path="Login_p" element={<Login/>}></Route>
            <Route path="/about_p" element={<About/>}></Route>
            <Route path="/contact_p" element={<Contact/>}></Route>
          
            <Route path="/property_p" element={<Property_cat/>}></Route>
                <Route path="sub_pro/:p_id" element={<Sub_pro/>}></Route>
                <Route path="pDetails/:p_id/:s_id" element={<Property_Details/>}></Route>
            <Route path="/services_p" element={<Services/>}></Route>
            
            
        </Routes>
        </Suspense>
    </Router>
  )
}

export default Routing