import React from 'react'
import './Footer.css'
import { footerMenuData, footerMenu } from '../../data/Footer'
import { TfiLinkedin } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className='footer-section'>
        <div className="top">
            <div className="container">
                <ul>
                    {
                        footerMenuData.map((manu, index) => (
                            <li key={index}>{manu}</li>
                        ))
                    }
                    <li className='subscribe-btn'>Subscribe to our News</li>
                </ul>
            </div>
        </div>
        <div className="bottom">
            <div className="container footer-button-menu">
                <div className='left'>
                    <span>&#169; Capitalmind 2022</span>
                    <ul>
                        {
                            footerMenu.map((fmanu, findex) => (
                                <li key={findex}>{fmanu}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className='right'>
                    <span><TfiLinkedin /></span>
                    <span>Follow Us on Linkedin</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer