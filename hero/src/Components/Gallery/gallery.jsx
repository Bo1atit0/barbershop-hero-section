import React from 'react'
import './gallery.css'
import Image1 from '../../Assets/Images/image1.webp'
import Image2 from '../../Assets/Images/image2.webp'
import Image3 from '../../Assets/Images/image3.webp'
import Image4 from '../../Assets/Images/image4.webp'
import Image5 from '../../Assets/Images/image5.webp'
import Image6 from '../../Assets/Images/image6.webp'

const gallery = () => {
  return (
    <section>
      <div className="hero1-gallery">
        <ul className="gallery-images">
          <li><img src={Image1} alt="Image1" /></li>
          <li><img src={Image2} alt="Image2" /></li>
          <li><img src={Image3} alt="Image3" /></li>
          <li><img src={Image4} alt="Image4" /></li>
          <li><img src={Image5} alt="Image5" /></li>
          <li><img src={Image6} alt="Image6" /></li>

          <li><img src={Image1} alt="Image1" /></li>
          <li><img src={Image2} alt="Image2" /></li>
          <li><img src={Image3} alt="Image3" /></li>
          <li><img src={Image4} alt="Image4" /></li>
          <li><img src={Image5} alt="Image5" /></li>
          <li><img src={Image6} alt="Image6" /></li>
        </ul>
      </div>
    </section>
  )
}

export default gallery