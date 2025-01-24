import React from 'react'
import './hero.css'
import icon2 from '../../Assets/Images/hero1_icon.webp'
import scissors_image from '../../Assets/Images/scissors.webp'
import Button from '../Buttons/button'

import { MdOutlineCalendarMonth } from "react-icons/md";
import { MdOutlineMiscellaneousServices } from "react-icons/md";

const hero = () => {
  return (
    <section>

      <div className="hero1-text">

        <div className="hero1-paragraph">
          <p>WHERE EVERY CUT TELLS YOUR STORY</p>
          <img src={icon2} alt="Line" />
        </div>
        
        <div className="header">
          <p>
            <span className='green h1'>LOOK</span> <span className='h1'>GOOD<span className='bold_dot'>•</span></span> <span className='green h1'>FEEL</span>
          </p>

          <div className="p-img">
            <p>
              <span className='h1'>GREAT<span className='bold_dot'>•</span></span>   <span className='h1'>EVERY</span> <span className='h1'>TIME</span>
            </p>
            <img src={scissors_image} alt="Scissors" />
          </div>
          
        </div>
          <div className="buttons">
            <Button color='white' text='Book Your Appointment' icon={MdOutlineCalendarMonth}/>
            <Button color='black' text='Explore Our Services' icon={MdOutlineMiscellaneousServices}/>
          </div>
        
      </div>
    </section>
  )
}

export default hero