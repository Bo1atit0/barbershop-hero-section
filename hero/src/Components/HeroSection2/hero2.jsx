import React from 'react'
import './hero2.css'
import arrow from '../../Assets/Images/rightArrow.png'
import scissors_image2 from '../../Assets/Images/scissors2.png'
import Button from '../Buttons/button'

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
        
        <div className="header">
          <p>
            <span className='h1'>LOOK</span> <span className='h1 gold'>GOOD<span className='bold_dot'>•</span></span>
          </p>

          <p>
          <span className='h1'>FEEL</span> <span className='h1 gold'>GREAT<span className='bold_dot'>•</span></span>
          </p>

          <p>
               <span className='h1'>EVERY</span> <span className='h1'>TIME</span>
            <span>
              <img src={scissors_image2} alt="Scissors" />
            </span>
          </p>
  
          <div className="buttons">
            <Button />
          </div>
        </div>
      </div>
    </section>
    </section>
  )
}

export default hero2