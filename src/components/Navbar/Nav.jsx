import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div className='nav-container'>
      <div className='title'>
        <h2>LOGO</h2>
      </div>
      <div className='menu'>
        <Link to='/'>STATE</Link>
        <Link to='axios'>AXIOS</Link>
        <Link to='/routing'>ROUTING</Link>
        <Link to='/contact-us'>CONTACT US</Link>
      </div>
    </div>
  )
}

export default Nav
