import React from 'react'
import { BsArrowRightShort } from "react-icons/bs";

const Slider = ({item}) => {
  return (
    <div className='slider'>
        <h3>{item.title}</h3>
        <h2 className="headline">
            {item.headline}
        </h2>
        <div className="sub-title">
            {item.subtitle}
        </div>
        <div className="learn-more">
            <BsArrowRightShort />
            Learn more
        </div>
    </div>
  )
}

export default Slider