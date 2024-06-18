import React from 'react'
import { NavLink } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Navbar'

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <span className="logo">mixMaster</span>
        <div className="nav-links">
          <NavLink to={'/'} className="nav-link">
            Home
          </NavLink>
          <NavLink to={'about'} className="nav-link">
            about
          </NavLink>
          <NavLink to={'newsletter'} className="nav-link">
            newsletter
          </NavLink>
        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar
