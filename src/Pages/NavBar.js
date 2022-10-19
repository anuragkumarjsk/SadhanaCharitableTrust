import React from 'react'
import logo from '../Images/logo.jpg'
import {FaFacebookSquare} from "react-icons/fa"
import './PagesCss/navbar.css'

function NavBar() {
  return (
    <>
    <nav className='main-nav'>
      <h4 className='org-name'>Sadhana Charitable Trust</h4>
      <div className='logo'>
        <a href='/'><img  alt='logo' className='logo-img' rel="apple-touch-icon" align='left' src={logo} href='../../public/logo.jpg' /></a> 
      </div>
      <div className='trust-name'>
        <h2 >Sadhana Charitable Trust</h2>
      </div>
      <div className='menu-link'>
        <ul>
          <li><a href='/' className='active'>Home</a></li>
          <li><a href='/activities'>Activities</a></li>
          <li><a href='/donate'>Donate</a></li>
          <li><a href='/volunteer'>Volunteer</a></li>
          <li><a href='/contactus'>Contact Us</a></li>
        </ul>
      </div>
        {/*Social media links*/}
        <div className='social-media'>
            <ul className='social-media-desktop'>
                <li><a href='https://www.facebook.com/people/Sadhana-Charitable-Trust/100067687247213/' ><FaFacebookSquare className='facebook'/> Follow on FB</a></li>
            </ul>
        </div>
    </nav>
  </>
  )
}

export default NavBar
