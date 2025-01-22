import React from 'react'
import { Link } from 'react-router-dom'
import './homePage.css'
import heroImage1 from '../Assets/Images/heroimage1.jpeg'
import heroImage2 from '../Assets/Images/heroimage2.jpeg'

const homePage = () => {
  return (
    <section className='home'>
        <h1>Click to view Hero Page</h1>

        <div className="home-container">
            <div className="hero1">
                <Link to='/hero1'> <img src={heroImage1} alt="heroImage1"/> </Link>
            </div>
            <div className="hero2">
                <Link to='hero2'> <img src={heroImage2} alt="heroImage2"/> </Link>
                
            </div>
        </div>
    </section>
  )
}

export default homePage