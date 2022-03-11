import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import './footer.css'

const Footer = () => {
  return (
    <div><footer>
    <div class="fcontainer">
      <div class="aboutus">
        <h2>About Us</h2>
        <p>Hi I am Aditya Chettri. I made this project for my completion of React js Course .
        I choose this topic because nowadays in my placce it has become a trend and a new marketing
        policy and I like to update my project and give a really finishing touch and add some more 
        things.</p>
              <ul class="sci">
        <li className="li"><a href="#" ><FacebookIcon className="icon"/></a></li>
        <li className="li"><a href="#" ><WhatsAppIcon className="icon"/></a></li>
        <li className="li"><a href="#" ><InstagramIcon className="icon"/></a></li>
        <li className="li"><a href="#" ><YouTubeIcon className="icon"/></a></li>
        <li className="li"><a href="#" ><TwitterIcon className="icon"/></a></li>
      </ul>
      </div>
      
          <div>
            <div class="quicklinks">
              <h2>Quick Links</h2>
              <ul>
                <li className="li"><a href="#" className="link">About</a></li>
                <li className="li"><a href="#" className="link">FAQ</a></li>
                <li className="li"><a href="#" className="link">Privacy Policy</a></li>
                <li className="li"><a href="#" className="link">Help</a></li>
                <li className="li"><a href="#" className="link">Terms & Conditions</a></li>
                <li className="li"><a href="#" className="link">Contact</a></li>
              </ul>
            </div>
            </div>
            <div class="Popular">
              <h2>Popular Searches</h2>
              <ul>
                <li className="li"><a href="#" className="link">Cheap Apartment near me</a></li>
                <li className="li"><a href="#" className="link">Pet Friendly Apartment near me</a></li>
                <li className="li"><a href="#" className="link">Open Houses near me</a></li>
                <li className="li"><a href="#" className="link">Apartment for rent</a></li>
                <li className="li"><a href="#" className="link">Townhomes for sale</a></li>
                <li className="li"><a href="#" className="link">Land for sale</a></li>
              </ul>
            </div>
            <div class="Cont">
              <h2>Contact Us</h2>
              <ul class="info">
                <li className="li">
                  <span></span>
                  <span id='address'><a href="#" className="link">Chowrasta<br/>
                  Darjeeling, P.O 734101<br/>India</a></span></li>
                  <li className="li">
                    <span></span>
                    <p><a href="ph: +91-7001230072" className="link">+91-7001230072</a></p>
                    <p><a href="ph: +91-8972151870" className="link">+91-8972151870</a></p>
                  </li>
                  <li className="li">
                    <span></span>
                    <p><a href="adiswagger@gmail.com" className="link">adiswagger@gmail.com</a></p>
                    
                  </li>
                  
              </ul>
              
            </div>
          
    </div>
    <p> All CopyRight &copy; RealEstate project 2022</p>
  </footer></div>
  )
}

export default Footer