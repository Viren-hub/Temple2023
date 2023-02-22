import React from 'react';
import './Contact.css';
import { FiArrowRight } from "react-icons/fi";
import { FaSearch} from "react-icons/fa"
import {BsPerson} from "react-icons/bs"
import {BsPencil } from "react-icons/bs"
 import{AiOutlineMail}  from "react-icons/ai"
 import image from '../../assets/img4.png'
 import image1 from '../../assets/img3.png'


// import { BsFillPersonFill } from 'react-icons/bs';

// import{BsFillPersonFill}from "react-icons/bs";

export default function Contact() {
  return (
    <div className='contact'>
        <h5>ॐ WAYS WE CAN HELP ॐ</h5>
        <h2>Angels Ready To<br/> Help</h2>
        <div className='vcontact'>
        <div className='contact1'>
          <img src={image} alt="img"/>
          <h4>+1212-683-9766</h4>
            {/* <img src={image} alt="img"/> */}
        </div>
        <div className='contact2'>
        <img src={image1} alt="img"/>
          <h6>Temple NewsLetter</h6>
          <input type="email"placeholder='Enter Email address'/>
          <button className='btn-5'><FaSearch/></button>
        </div>
        <div className='contact-4'>
            or
        </div>
        <div className='contact3'>
            <div className='left'>
              <div className='container'>
          <form className='contact-form'>
              <div className='half'>
             <input type="text"placeholder='First Name'required /><div className='user'><BsPerson/></div>
             <input type="text"placeholder='Last Name'required/><div className='user1'><BsPerson/></div>
             </div>
             <div className='full'>
             <input type="text"placeholder='Subject'required/><div className='sub'><BsPencil/></div>
             <input type="email"placeholder='Email address'required/><div className='mail'><AiOutlineMail/></div>
             </div> 
             <textarea  placeholder='Enter Message' rows="5" cols="50">
               </textarea>
               <button className='btn4'>GET A QUOTE <FiArrowRight /></button>
          </form>
          </div>
          </div>
          
          <div className='right'>
            <div className='one'>
             <h3>Maha Shivratri</h3><br/>
             <h4>Ganesh Chaturthi</h4><br/>
             <h6>Shivratri</h6>
              </div>
              <div className='two'>
             <h3>Happy <br/><span>Maha Shivratri</span></h3><br/>
             <h4>Durga Puja</h4><br/>
             <h6>Happy<br/><span>Maha Shivratri</span></h6>
              </div>
          </div>
          </div>
          </div>
        </div>
  )
}