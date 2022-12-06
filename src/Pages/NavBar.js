import React from 'react'
import logo from '../Images/logo.jpg'
import {FaFacebookSquare} from "react-icons/fa"
import {Link, useLocation} from 'react-router-dom'
import './PagesCss/navbar.css'

function NavBar() {
  const location = useLocation();
  return (
    <>
    <nav className='main-nav'>
      <h4 className='org-name'>Sadhana Charitable Trust</h4>
      <div className='logo'>
        <a href='/'><img  alt='logo' className='logo-img' rel="apple-touch-icon" align='left' src={logo} href='../../public/logo.jpg' /></a> 
      </div>
      <div className='trust-name'>
        <p>Sadhana Charitable Trust</p>
      </div>
      <div className='menu-link'>
        <ul>
          <li ><Link to='/'><a href='/' className={location.pathname==='/'?'navlinkactive':'navlinkpassive'}>Home</a></Link></li>
          <li ><Link to='/activities'><a href='/activities' className={location.pathname==='/activities'?'navlinkactive':'navlinkpassive'}>Activities</a></Link></li>
          <li ><Link to='/donate'><a href='/donate' className={location.pathname==='/donate'?'navlinkactive':'navlinkpassive'}>Donate</a></Link></li>
          <li ><Link to='/volunteer'><a href='/volunteer' className={location.pathname==='/volunteer'?'navlinkactive':'navlinkpassive'}>Volunteer</a></Link></li>
          <li ><Link to='/contactus'><a href='/contactus' className={location.pathname==='/contactus'?'navlinkactive':'navlinkpassive'}>Contact</a></Link></li>
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
