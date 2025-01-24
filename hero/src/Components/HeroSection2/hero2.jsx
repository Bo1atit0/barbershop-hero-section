import React from 'react'
import './hero2.css'
import arrow from '../../Assets/Images/rightArrow.webp'
import scissors_image2 from '../../Assets/Images/scissors2.webp'
import Button from '../Buttons/button'
import { MdOutlineCalendarMonth } from "react-icons/md";
import { MdOutlineMiscellaneousServices } from "react-icons/md";

const hero2 = () => {
  return (
    <section className="hero2-container">
        <nav className='hero2-nav'>
                <span className="img">
                  <img src={scissors_image2} alt="Scissors Icon" />
                  <p>Barbing Luxe</p>
                </span>
        
                <span className="nav-list">
                  <ul>
                    <li className='white'>Home</li>
                    <li>About us</li>
                    <li>Services</li>
                    <li>Gallery</li>
                    <li>Testimonials</li>
                  </ul>
                </span>
              </nav>

              <section>

      <div className="hero2-text">

        <div className="hero2-paragraph">
          <p>WHERE EVERY CUT TELLS YOUR STORY</p>
          <img src={arrow} alt="Line" />
        </div>
        
        <div className="header2">
          <p>
            <span className='h1'>LOOK</span> <span className='h1 gold'>GOOD<span className='bold_dot'>•</span></span>
          </p>

          <p>
          <span className='h1'>FEEL</span> <span className='h1 gold'>GREAT<span className='bold_dot'>•</span></span>
          </p>

          <div className="p-img2">
            <p>
              <span className='h1'>EVERY</span> <span className='h1'>TIME</span>
            </p>
            <img src={scissors_image2} alt="Scissors" />
          </div>
          
  
          <div className="buttons">
            <Button color='white' text='Book Your Appointment' icon={MdOutlineCalendarMonth}/>
            <Button color='transparent' text='Explore Our Services' icon={MdOutlineMiscellaneousServices} />
          </div>
        </div>
      </div>
    </section>
    </section>
  )
}

export default hero2