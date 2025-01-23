import React from 'react'
import './hero1.css'
import icon2 from '../../Assets/Images/hero1_icon.png'
import icon from '../../Assets/Images/navbar_icon.png'
import scissors_image from '../../Assets/Images/scissors.png'
import Image1 from '../../Assets/Images/image1.png'
import Image2 from '../../Assets/Images/image2.jpg'
import Image3 from '../../Assets/Images/image3.png'
import Image4 from '../../Assets/Images/image4.png'
import Image5 from '../../Assets/Images/image5.png'
import Image6 from '../../Assets/Images/image6.png'

import { MdOutlineCalendarMonth } from "react-icons/md";
import { MdOutlineMiscellaneousServices } from "react-icons/md";

const hero1 = () => {
  return (
    <section className="hero-section1-container">
      <nav>
        <span className="img">
          <img src={icon} alt="Scissors Icon" />
          <p>Barbing Luxe</p>
        </span>

        <span className="nav-list">
          <ul>
            <li className='green'>Home</li>
            <li>About us</li>
            <li>Services</li>
            <li>Gallery</li>
            <li>Testimonials</li>
          </ul>
        </span>
      </nav>

      <div className="hero1-text">

        <div className="hero1-paragraph">
          <p>WHERE EVERY CUT TELLS YOUR STORY</p>
          <img src={icon2} alt="Line" />
        </div>

        <div className="header">

          <p>
          <span className='green h1'>LOOK</span> <span className='h1'>GOOD<span className='bold_dot'>•</span></span> <span className='green h1'>FEEL</span>
          </p>

          <p>
          <span className='h1'>GREAT<span className='bold_dot'>•</span></span>   <span className='h1'>EVERY</span> <span className='h1'>TIME</span>
          <span>
            <img src={scissors_image} alt="Scissors" />
          </span>
          </p>
          
          
          
          <div className="buttons">
            <button className="book"><MdOutlineCalendarMonth className='react_icon'/>Book Your Appointment</button>
            <button className="services"><MdOutlineMiscellaneousServices className='react_icon'/>Explore Our Services</button>
          </div>
        </div>
      </div>

      <div className="hero1-gallery">
        <ul className="gallery-images">
          <li><img src={Image1} alt="Image1" /></li>
          <li><img src={Image2} alt="Image2" /></li>
          <li><img src={Image3} alt="Image3" /></li>
          <li><img src={Image4} alt="Image4" /></li>
          <li><img src={Image5} alt="Image5" /></li>
          <li><img src={Image6} alt="Image6" /></li>
        </ul>
      </div>

      <div className="appointments">
        <p><b>300</b> appointments booked today</p>
      </div>
    </section>
  )
}

export default hero1