import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className='navbar'>
        
          <li><Link  className='link'to="/">Home</Link></li>
          <li><Link className='link' to="/about">About</Link></li>
          <li><Link className='link'to="/contact">Contact</Link></li>
          <li><Link className='link'to="/service">Services</Link></li>
          <li><Link className='link'to="/useState">UseState</Link></li>
          <li><Link className='link'to="/Login">Login</Link></li>
          <li><Link className='link'to="/Hook">Hook</Link></li>
          <li><Link className='link'to="/Signedup">Signedup</Link></li>
          <li><Link className='link'to="/todo">Todo</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar