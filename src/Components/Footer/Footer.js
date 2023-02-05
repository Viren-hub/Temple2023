import React from 'react'
import './Footer.css'
import { FaFacebook,FaInstagram,FaTwitter} from "react-icons/fa";
import temple from '../../assets/Footer1.jpg'
export default function Footer() {
  return (
    <div className='footer'>
        <div className='f1'>
          <img src={temple} alt="img"/>
        </div>
        <div className='f2'>
           <h5><a href='#'>Link1</a></h5>
          <h5><a href='#'>Link2</a></h5>
          <h5><a href='#'>Link3</a></h5>
        </div>
        <div className='f3'>
          <h2>CONNECT WITH US</h2>
          <h2><a href=''><FaInstagram/></a></h2>
          <h2><a href=''><FaFacebook/> </a></h2>
          <h2><a href=''><FaTwitter/>  </a></h2>
        </div>
    </div>
  )
}
