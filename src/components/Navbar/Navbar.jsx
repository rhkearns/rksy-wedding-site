import React from 'react'
import "./navbar.scss"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav-bar'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/story">Our Story</NavLink>
      <NavLink to="/directions">Directions</NavLink>
      <NavLink to="/schedule">Schedule</NavLink>
      <NavLink to="/faqs">FAQs</NavLink>
    </nav>
  )
}

export default Navbar