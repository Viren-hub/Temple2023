import React from 'react'
import './Gallery.css'
import galimg1 from '../../assets/gallary-1.jpg'
import galimg2 from '../../assets/gallary-2.jpg'
import galimg3 from '../../assets/gallary-3.jpg'
import galimg4 from '../../assets/gallary-4.jpg'
import galimg5 from '../../assets/gallary-5.jpg'
export default function Gallery() {
  return (
    <div className='gallery'>
      <h2>Gallery</h2>
      <div className='Gland-page'>

            <div className='G-1'>
              <div className='G-img-1' >
              <img src={galimg1} alt="img"/>
              </div>
              <div className='G-img-2'>
              <img src={galimg2} alt="img"/>
              </div>
            </div>

            <div className='G-2'>
              <div className='G-img-2-2'>
              <img src={galimg3} alt="img"/>
              </div>
            </div>


            <div className='G-3'>
              <div className='G-img-3-1'>
              <img src={galimg4} alt="img"/>
              </div>
              <div className='G-img-3-2'>
              <img src={galimg5} alt="img"/>
                </div>
            </div>
        </div>
    </div>
  )
}
