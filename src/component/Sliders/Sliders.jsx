import React, { useState } from 'react'
import './Sliders.css'
import { sliderData } from '../../data/Sliders'
import {
  BsArrowRightShort,
  BsArrowLeftShort
} from "react-icons/bs";
import Navbar from '../Navbar/Navbar';

const Sliders = () => {

  const [selected, setSelected] = useState(0)
  const sLength = sliderData.length

  return (
    <div className='sliders'>
      <Navbar />
      <div className="container slider-info">
          <div className="left slider">
              <h3>{sliderData[selected].title}</h3>
              <h2 className="headline">
                  {sliderData[selected].headline}
              </h2>
              <div className="sub-title">
                  {sliderData[selected].subtitle}
              </div>
              <div className="learn-more">
                  <span><BsArrowRightShort /></span>
                  Learn more
              </div>
          </div>
          <div className="right">
            <span>
              <BsArrowLeftShort
              onClick={() => {
                selected === 0 ? setSelected(sLength - 1):
                setSelected((prev) => prev - 1)
              }} 
              />
              <BsArrowRightShort
              onClick={() => {
                selected === sLength - 1 ? setSelected(0):
                setSelected((next) => next + 1)
              }}
              />
            </span>
          </div>
      </div>
      <div className="container slider-bottom">
        <div className={selected === 0 ? 'active' : ''}>
          <h3>About Us</h3>
        </div>
        <div className={selected === 1 ? 'active' : ''}>
          <h3>Our team</h3>
        </div>
        <div className={selected === 2 ? 'active' : ''}>
          <h3>Where we are</h3>
        </div>
        <div className={selected === 3 ? 'active' : ''}>
          <h3>Contact us</h3>
        </div>
      </div>
    </div>
  )
}

export default Sliders