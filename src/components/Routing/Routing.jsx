import React from 'react'
import './Routing.css'
import { Link } from 'react-router-dom'
const Routing = () => {
  return (
    <div className='flex-container'>
      
    <div className='side-bar'>
<div>
  <Link to='/routing/electronics'>Electronics</Link>
  <a>Textile</a>
  <a>Jwellery</a>
  <a>Plastic</a>
</div>
    </div>
    <div className='right-side'>
      <h1>Routing</h1>
    </div>
    </div>
  )
}

export default Routing
