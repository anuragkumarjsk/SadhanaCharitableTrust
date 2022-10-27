import React from 'react'
import '../Pages/PagesCss/contact.css'
import 'bootstrap/dist/css/bootstrap.css';
import {BsFillTelephoneFill} from "react-icons/bs"
import {IoIosMailUnread} from "react-icons/io"
import {FaFacebookSquare} from "react-icons/fa"
import { Button } from 'react-bootstrap';

function ContactUs() {
  const submitHandler = () =>{

  }
  return (
    <div className='contact-us'>
      <div class="jumbotron">
        <p className="display-3">We would love to hear from you
        <BsFillTelephoneFill className='phone-icon'/>
        <IoIosMailUnread/>
        </p> 
      </div>
      <div className='flex-container'>
        <div className='form-div'>
          <h3><b>Contact Information</b></h3><hr></hr>
          <h5>
            <b>Email us at</b> : abc@zyx.com <br></br><br></br>
            <b>Contact</b> : +91-9000000000 <br></br><br></br>
            <b>Address</b> : Sadhana Charitable Trust, Qr No- IV 27/3 Unit-I, Bhubaneswar, Odisha 751001<br></br>
            <hr></hr>
            <a href='https://www.facebook.com/people/Sadhana-Charitable-Trust/100067687247213/' ><FaFacebookSquare /> Follow on FB</a>
          </h5>
        </div>
        <div className='form-div'>
        <h3><b>Please leave a message for us!</b></h3><hr></hr>
        <label>Name</label><br></br>
        <input type="text" placeholder='Name'/><br></br><br></br>
        <label>Email</label><br></br>
        <input type="email" placeholder='Email'/><br></br><br></br>
        <label>Contact No</label><br></br>
        <input type="text" placeholder='Contact'/><br></br><br></br>
        <label>What's your message?</label><br></br>
        <textarea></textarea> <br></br>
        <Button>Submit</Button>
        </div>
      </div>
    </div>
  )
}

export default ContactUs