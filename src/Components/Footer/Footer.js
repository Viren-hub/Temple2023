import React from 'react'
import './Footer.css'
import { FaFacebook,FaInstagram,FaTwitter,FaYoutube,FaPhone,FaMailBulk,FaLocationArrow, FaCopyright, FaRegCopyright} from "react-icons/fa";
import temple from '../../assets/om.png'
export default function Footer() {
  return (
    <div className='footer'>
    <div className='footer1'>
        <div className='f1'>
          
          <h3 className='h3'>About Us</h3>
          <p>You need to be sure there isn't anything embarrassing hidden in the middle of text</p><br></br>
          <h6><FaPhone/> 987-987-930-302</h6>
          <h6><FaMailBulk/> Info@example.com</h6>
          <h6><FaLocationArrow/> 14/A,Poor Street City Tower,New York USA</h6>
        </div>
        <div className='f2'>
        <h3 className='f2h3'>Information</h3>
           <h5><a href='#'><img src={temple} alt="img"/>Pooja</a></h5>
          <h5><a href='#'><img src={temple} alt="img"/>Services</a></h5>
          <h5><a href='#'><img src={temple} alt="img"/>Temple</a></h5>
          <h5><a href='#'><img src={temple} alt="img"/>Holis</a></h5>
          <h5><a href='#'><img src={temple} alt="img"/>Volunteer</a></h5>
          <h5><a href='#'><img src={temple} alt="img"/>Donation</a></h5>
        </div>
        <div className='f3'>
          <h2 className='f3h2'>Follow Us on</h2>
          <div className='f31'>
          <h2><a href=''><FaFacebook/> </a></h2>
          <h2><a href=''><FaYoutube/> </a></h2>
          <h2><a href=''><FaInstagram/></a></h2>
          <h2><a href=''><FaTwitter/>  </a></h2>
          </div>
        </div>
    </div>
    <div className='cpr'>
          <h6>COPYRIGHT<FaRegCopyright/>MAHARATRI-2023</h6>
        </div>
    </div>
    
  )
}
