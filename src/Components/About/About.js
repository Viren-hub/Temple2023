import React from 'react'
import './About.css'
import Asset1 from '../../assets/H1.jpg'
import Asset2 from '../../assets/H2.jpeg'
import Asset3 from '../../assets/H1.jpg'
import { FiArrowRight } from "react-icons/fi";
// import { FiArrowRight } from "react-icons/fi";
export default function About() {
  return (
    <div className='about'>
      <div className='ab-box1'>
        {/* <h2>Left</h2> */}
        <div className='img1'  >
          <img src={Asset1} alt='img1'></img>
        </div>
        <div className='img3' >
          <img src={Asset3} alt='img3'></img>
        </div>
        <div className='img2' >
          <img src={Asset2} alt='img2' ></img>
        </div>



      </div>

      <div className='ab-box2'>
        {/* <h2>right</h2> */}
        <h1>Headline of temple </h1>
        <p>It is a long established fact that a reader will be
          distracted by the readable content of a page when
          looking at its layout. The point of using Lorem Ipsum is
          that it has a more-or-less normal distribution of letters,
          as opposed to using 'Content here, content here',</p>
        <button className='bton'>Learn More<FiArrowRight /></button>

      </div>
    </div>
  )
}
