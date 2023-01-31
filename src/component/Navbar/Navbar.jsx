import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container navbar-menu">
      <ul>
        <li>Who we are</li>
        <li>What we do</li>
        <li>Sectors</li>
        <li>Transactios</li>
        <li className='logo'>Skaylark.</li>
        <li>Our people</li>
        <li>Global reach</li>
        <li>Newsletter</li>
        <li>Contact us</li>
      </ul>
      </div>
    </div>
  )
}

export default Navbar