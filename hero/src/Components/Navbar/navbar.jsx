import React from 'react';
import icon from '../../Assets/Images/navbar_icon.webp';
import './navbar.css'


const navbar = () => {
  return (
    <nav className='hero1-nav'>
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
  )
}

export default navbar