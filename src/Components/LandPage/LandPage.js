import React from 'react'
import './LandPage.css'
import Header from '../Header/Header';
import { FiArrowRight } from "react-icons/fi";


function LandPage() {

  return (


    <div className='landpage' id='home'>
      <div className='nav'>
        <Header />
      </div>
      {/* <div className='main-div'> */}
      <div className='left-one'>
        <h1>Some Important Life Lessons From Gita</h1><br />
        <div className='vleft'>
          <div className='left-img'>
            <img className='line4' alt='' />
            <img className='line5' alt='' />
            <img className='line6' alt='' />
          </div>
          <p>
            We are a Hindu that belives in Lord Rama and Vishnu Deva the followers
            and We are a Hindu that belives in Lord Rama and Vishnu Deva.This is where
            you should start</p>
        </div>
        <button className="btn1">
          JOIN TODAY        <FiArrowRight />
        </button>
        <button className="btn2">
          VIEW SERVICES         <FiArrowRight />
        </button>
      </div>
    </div>
    //  </div>

  )
}



export default LandPage;