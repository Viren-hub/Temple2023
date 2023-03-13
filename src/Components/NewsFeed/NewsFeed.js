import React from 'react'
import './NewsFeed.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fontSize } from '@mui/system';
import Data from '../../data.json';



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
        <div className='b1'style={{fontWeight:'bold'}}>{Data[3].description}</div>
        <div className='b1'><FontAwesomeIcon icon={faCalendar} color="red" />{Data[3].date}</div>
        </div>
        
                            <p className='paragraph'>{Data[3].title}</p>
        
        <div className='by'>
          <div className='by-1'>
        <img src="https://cdn.cdnparenting.com/articles/2019/01/08144644/1211306812-H.webp" alt="" style={{ width: '25px', height: '25px', borderRadius: '25px', }} />
        </div>
        
            <div className='by-1' style={{color:'red'}}>
           {Data[3].author}
        </div>
         
        </div>
        </div>
        {/* </Carousel.Item>

        <Carousel.Item> */}
                 
        <div  className='box'>
                <img src="https://thumbs.dreamstime.com/b/diya-kalash-incense-sticks-fruit-any-age-old-traditional-way-performing-prayers-puja-india-134806998.jpg" alt="Description of the image" />
        <div  className='b'>
          
        <div className='b1'style={{fontWeight:'bold'}}>{Data[3].description}</div>
      
        <div className='b1'><FontAwesomeIcon icon={faCalendar} color="red" />{Data[3].date}</div>
                
        </div>
      
                            <p className='paragraph'>{Data[3].title}</p>
       
                           
        <div className='by'>
          <div className='by-1'>
        <img src="https://cdn.cdnparenting.com/articles/2019/01/08144644/1211306812-H.webp" alt="" style={{ width: '25px', height: '25px', borderRadius: '25px', }} />
        </div>
      
            <div className='by-1' style={{color:'red'}}>
           {Data[3].author}
        </div>
        
       
      
        </div>
                                     
        </div>
                                         
                
        {/* </Carousel.Item>

        <Carousel.Item> */}
        <div className='box'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdvAGcKOyYTZ-PYfXWLCa0iBc_-EqR3zlSxl0w10k4v77AiCTWlkzw38BmQ5RXnFzAvmE&usqp=CAU" alt="Description of the image" />
        <div className='b'>
        <div className='b1'style={{fontWeight:'bold'}}>{Data[3].description}</div>
        
        <div className='b1'><FontAwesomeIcon icon={faCalendar} color="red" />{Data[3].date}</div>
        </div>
        
                            <p className='paragraph'>{Data[3].title}</p>
       
        <div className='by'>
          <div className='by-1'>
        <img src="https://cdn.cdnparenting.com/articles/2019/01/08144644/1211306812-H.webp" alt="" style={{ width: '25px', height: '25px', borderRadius: '25px', }} />
        </div>
        
            <div className='by-1' style={{color:'red'}}>
           {Data[3].author}
        </div>
        
        </div>
        
        </div>
        {/* </Carousel.Item>
        </Carousel> */}
    </div>
    </div>
  )
}







