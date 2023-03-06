import React, { useState } from 'react'
import './About.css'
import Asset1 from '../../assets/Footer1.jpg'
import Asset2 from '../../assets/Footer1.jpg'
import Asset3 from '../../assets/Footer1.jpg'
import { FiArrowRight } from "react-icons/fi";
import Data from '../../data.json'
export default function About() { 
  const [Show, setShow] = useState(false);
  return (
    <div className='about' id='about'>
      <div className='ab-box1'>
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
        <h4>About temple </h4>
        <img className='line1' alt=''></img>
        <img className='line2' alt=''></img>
        <img className='line3' alt=''></img>

        <div className='para7'>
        {
               Data.map((Data, index)=>(
                <p key={index}>{Data.About}

    
          
            {
              

              Show ? <span className='para5'>
                Hindu temple architecture is mainly divided into the Dravidian style of the
                south and the Nagara style of the north, with other regional styles.
                The basic elements of the Hindu temple remain the same across all periods and styles. The most essential
                feature is the inner sanctuary, the garbhagriha or womb-chamber, where the primary murti or cult image of
                a deity is housed in a simple bare cell. Around this chamber there are often other structures and buildings,
                in the largest cases covering several acres. On the exterior, the garbhagriha is crowned by a tower-like shikhara,
                also called the vimana in the south. The shrine building may include an ambulatory for parikrama (circumambulation),
                one or more mandapas or congregation halls, and sometimes an antarala antechamber and porch between garbhagriha and
                mandapa.
                A Hindu temple is a symbolic house, the seat and dwelling of Hindu gods. It is a structure designed to bring human
                beings and gods together according to Hindu faith. Inside its garbhagriha innermost sanctum, a Hindu temple contains
                a murti or Hindu god's image. Hindu temples are large and magnificent with a rich history. There is evidence of use
                of sacred ground as far back as the Bronze Age and later during the Indus Valley civilization.
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
                from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of
                the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
                of "de Finibus Bonorum et Malorum"
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
                from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of
                the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.3
                3 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. n publishing and graphic
                design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without
                relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.

              </span> :null }
            </p>
               ))
            }
          <button  onClick={()=>setShow(!Show)} className='bton'>Learn More<FiArrowRight /></button>

          </div>
      </div>
    </div>



  )
}


