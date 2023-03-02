import React from 'react'
import './NewsFeed.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fontSize } from '@mui/system';



export default function NewsFeed() {
  return (
    <div id='news'>
       <h1 className='heading'>News Feed</h1>
       <div className='NewsFeed'>  
           
        {/* <Carousel>
        <Carousel.Item> */}
        <div className='box'>
        
        <img src="https://thumbs.dreamstime.com/b/copper-kalash-glass-spoon-plate-used-bramhins-sacred-thread-ceremony-performing-sandhya-vandanam-kriya-over-101249182.jpg" alt="Description of the image" />
        <div className='b'>
        <div className='b1'style={{fontWeight:'bold'}}>ॐ Temple,Love</div>
        <div className='b1'><FontAwesomeIcon icon={faCalendar} color="red" /> May 20, 2022</div>
        </div>
        <p className='paragraph'>Temple companies are being so transparent with thier work.</p>
        <div className='by'>
          <div className='by-1'>
        <img src="https://cdn.cdnparenting.com/articles/2019/01/08144644/1211306812-H.webp" alt="" style={{ width: '25px', height: '25px', borderRadius: '25px', }} />
        </div>
        <div className='by-1' style={{color:'red'}}>
          by Miha Boukar
        </div>
        </div>
       
        </div>
        {/* </Carousel.Item>

        <Carousel.Item> */}
        <div className='box'>
        <img src="https://thumbs.dreamstime.com/b/diya-kalash-incense-sticks-fruit-any-age-old-traditional-way-performing-prayers-puja-india-134806998.jpg" alt="Description of the image" />
        <div className='b'>
        <div className='b1'style={{fontWeight:'bold'}}>ॐ Temple,Love</div>
        <div className='b1'><FontAwesomeIcon icon={faCalendar} color="red" /> May 20, 2022</div>
        </div>
        <p className='paragraph'>Temple companies are being so transparent with thier work.</p>
        <div className='by'>
          <div className='by-1'>
        <img src="https://cdn.cdnparenting.com/articles/2019/01/08144644/1211306812-H.webp" alt="" style={{ width: '25px', height: '25px', borderRadius: '25px', }} />
        </div>
        <div className='by-1' style={{color:'red'}}>
          by Miha Boukar
        </div>
        </div>
        </div>
        {/* </Carousel.Item>

        <Carousel.Item> */}
        <div className='box'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdvAGcKOyYTZ-PYfXWLCa0iBc_-EqR3zlSxl0w10k4v77AiCTWlkzw38BmQ5RXnFzAvmE&usqp=CAU" alt="Description of the image" />
        <div className='b'>
        <div className='b1'style={{fontWeight:'bold'}}>ॐ Temple,Love</div>
        <div className='b1'><FontAwesomeIcon icon={faCalendar} color="red" /> May 20, 2022</div>
        </div>
        <p className='paragraph'>Temple companies are being so transparent with thier work.</p>
        <div className='by'>
          <div className='by-1'>
        <img src="https://cdn.cdnparenting.com/articles/2019/01/08144644/1211306812-H.webp" alt="" style={{ width: '25px', height: '25px', borderRadius: '25px', }} />
        </div>
        <div className='by-1' style={{color:'red'}}>
          by Miha Boukar
        </div>
        </div>
        
        </div>
        {/* </Carousel.Item>
        </Carousel> */}
    </div>
    </div>
  )
}







