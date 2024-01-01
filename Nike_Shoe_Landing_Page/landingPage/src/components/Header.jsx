import React from 'react'
import './Header.css'
function Header() {
  return (
    <div>
        <nav>
      <div className="logo">
        <img src='/image/brand_logo.png' alt='logo'/>
      </div>
      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>
      <button>login</button>
      </nav>
    </div>
  )
}

export default Header
