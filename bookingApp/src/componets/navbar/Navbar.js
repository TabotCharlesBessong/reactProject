
import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar' >
      <div className="navContainer">
        <span className="logo">Bolingo</span>
        <div className="navItems">
          <button className="navButton">register</button>
          <button className="navButton">login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar