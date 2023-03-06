import React from 'react'
import './LandPage.css'
import Header from '../Header/Header';
import { FiArrowRight } from "react-icons/fi";
import Data from '../../data.json';
function LandPage() {
  return (
    

    <div className='landpage' id='home'>

      <div className='nav'>
        <Header />
      </div>
      <div className='left-one'>
        {
               Data.map((Data, index)=>(
                <h1 key={index}>{Data.heading}</h1>

               ))
      }

        <div className='vleft'>
          <div className='left-img'>
            <img className='line4' alt='' />
            <img className='line5' alt='' />
            <img className='line6' alt='' />
          </div>
          {
                           Data.map((Data, index)=>(

          <p key={index}>{Data.subheading}</p>
                           ))
}
        </div>
        
        <button className="btn1">
          Join Today         <FiArrowRight />
        </button>
        <button className="btn2">
          View Services         <FiArrowRight />
        </button>
  
      </div>

    </div>

  )
}




export default LandPage;