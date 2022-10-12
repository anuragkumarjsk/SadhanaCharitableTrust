import React from 'react'
import {Link} from 'react-router-dom'
import './PagesCss/topnavbar.css'
function TopNavbar() {
  return (
    <div className='topnav'>
      <Link to='/'>
        <h2 className='navlink'>Home</h2>
      </Link>
      <Link to='/activities'>
        <h2 className='navlink'>Activities</h2>
      </Link>
      <Link to='/donate'>
        <h2 className='navlink'>Donate</h2>
      </Link>
      <Link to='/volunteer'>
        <h2 className='navlink'>Volunteer</h2>
      </Link>
      <Link to='/contactus'>
        <h2 className='navlink'>Contact Us</h2>
      </Link>
    </div>
  )
}

export default TopNavbar