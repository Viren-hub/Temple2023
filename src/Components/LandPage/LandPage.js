import React from 'react'
import './LandPage.css'
import Header from '../Header/Header';
import { FiArrowRight } from "react-icons/fi";


function LandPage() {

  return (
    
  <div className='landpage'>
    <div className='heading'>
    
    <h2>Some Important Life Lessons From Gita</h2>
</div><div className='para'>
      <p>
        <img className='line1'alt=''/>
        <img className='line2'alt=''/>
        <img className='line3'alt=''/>

        We are a Hindu that belives in Lord Rama and Vishnu Deva the followers
         and We are a Hindu that belives in Lord Rama and Vishnu Deva.This is where 
        you should start
      </p>
          </div>
          <button className="btn1">
            JOIN TODAY<FiArrowRight />
          </button>
           <button className='btn2'>
            VIEW SERVICES        <FiArrowRight/>
           </button>
          <Header />

    </div>
  // </div>
  )
}



export default LandPage;