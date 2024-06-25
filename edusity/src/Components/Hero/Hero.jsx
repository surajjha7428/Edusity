import React from 'react'
import './Hero.css'
import dark_arror from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
          <div className="hero-text">
              <h1>We Ensure better education for a better world</h1>
              <p>Our cutting-edge curriculam is designed to empower students with the knowledge, skills and experiencew needed to excel in the dynamic feild of education</p>
              <button className='btn'>Explore More <img src={dark_arror} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
