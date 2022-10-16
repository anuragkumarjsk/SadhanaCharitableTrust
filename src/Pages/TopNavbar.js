import React from 'react'
import {Link,useLocation} from 'react-router-dom'
import './PagesCss/topnavbar.css'
const sadhanaLogo = require('../Assets/Images/SCT.jpeg')
function TopNavbar() {
  const location = useLocation();
  return (
    <div style={{display:'flex',boxShadow: '0px 7px 24px rgba(0, 0, 0, 0.16)',backgroundColor: 'aliceblue'}}>
    <div style={{width:'20%',
      margin:'4px',
  }}>
      <img src={sadhanaLogo} width='60px' height='60px' style={{borderRadius:'50%',border:'1px solid'}} alt='sadhana trust'/>
    </div>
    <div className='topnav'>
      <Link to='/'>
        <h2 className={location.pathname === '/'?'navlinkactive':'navlinkpassive'}>Home</h2>
      </Link>
      <Link to='/activities'>
        <h2 className={location.pathname === '/activities'?'navlinkactive':'navlinkpassive'}>Activities</h2>
      </Link>
      <Link to='/donate'>
        <h2 className={location.pathname === '/donate'?'navlinkactive':'navlinkpassive'}>Donate</h2>
      </Link>
      <Link to='/volunteer'>
        <h2 className={location.pathname === '/volunteer'?'navlinkactive':'navlinkpassive'}>Volunteer</h2>
      </Link>
      <Link to='/contactus'>
        <h2 className={location.pathname === '/contactus'?'navlinkactive':'navlinkpassive'}>Contact Us</h2>
      </Link>
    </div>
    </div>
  )
}

export default TopNavbar