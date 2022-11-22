import { Button } from 'bootstrap'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import axios from 'axios'
import './PagesCss/contactus.css'
import logo from '../Images/logo.jpg'
const img1 = require('../../src/Assets/Images/SCT.jpeg')


function ContactUs() {
  const navigate = useNavigate()
  const contactUrl = 'https://sheet.best/api/sheets/1e4e8190-bf32-48cd-a632-5ff0bfca1b65'
  const [contacts, setDetails] = useState({
    name:'',
    email:'',
    contact:'',
    message:''
  })
  const changeHandler = (e) => {
    setDetails({...contacts,[e.target.name]: e.target.value})
  }

  const submitForm = (e)=>{
    e.preventDefault();
    axios.post(contactUrl, contacts)
    .then(response => {
      console.log(response);
      navigate('/success')
    })
    .catch(err => {
      console.log(err);
      navigate('/failiure')
    })
  }
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [contact, setContact] = useState('')
  // const [message, setMessage] = useState('')

  const Teachers = [{name:'Archana',url:require('../../src/Assets/Images/OurTeachers/Archana.jpeg')},
  {name:'Barsha',url:require('../../src/Assets/Images/OurTeachers/Barsha.jpeg')},
  {name:'Brundabati',url:require('../../src/Assets/Images/OurTeachers/Brundabati.jpeg')},
  {name:'Jagabandhu',url:require('../../src/Assets/Images/OurTeachers/jagabandhu.jpeg')},
  {name:'Jyotish',url:require('../../src/Assets/Images/OurTeachers/Jyotish.jpeg')},
  {name:'Madhusudan',url:require('../../src/Assets/Images/OurTeachers/Madhusudan.jpeg')},
  {name:'Megha',url:require('../../src/Assets/Images/OurTeachers/Megha.jpeg')},
  {name:'Nandini',url:require('../../src/Assets/Images/OurTeachers/Nandini.jpeg')},
  {name:'Neha',url:require('../../src/Assets/Images/OurTeachers/Neha.jpeg')},
  {name:'Rosalin',url:require('../../src/Assets/Images/OurTeachers/Rosalin.jpeg')},
  {name:'Sabita',url:require('../../src/Assets/Images/OurTeachers/Sabita.jpeg')},
  {name:'Sita',url:require('../../src/Assets/Images/OurTeachers/Sita.jpeg')},
  {name:'Sonali',url:require('../../src/Assets/Images/OurTeachers/Sonali.jpeg')},

]
  
  
  const Ourteachers =()=>{
    
    return(
    <>
    <div style={{width:'100%',height:'100%'}}>
      <div style={{display:'flex', flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',flexWrap:'wrap'}}>
          {Teachers.map((item,indx)=>{
                return(
                <div style={{width:'25%',height:'auto',display:'grid',placeItems:'center',border:'1px solid grey',borderRadius:'4px',backgroundColor:'palevioletred',padding:'10px',margin:'10px 20px',boxShadow: '0px -6px 12px rgba(0, 0, 0, 0.06)'}}>
                <img width='200px' height='200px'style={{borderRadius:'50%'}} src={item.url} alt='teach'/>
                <h3 style={{color:'black',fontSize:'20px',paddingTop:'40px'}}>{item.name}</h3>
              </div>
              )
          })}

      </div>

  

    </div>
    </>
    )
  } 

  return (
    <>
    <h1 style={{color:'blueviolet', fontFamily:'revert-layer'}}>Contact Us</h1>
    <div className='contact-form'>
      
      <div>
        <label>Name</label> <br></br>
        <input placeholder='Name' type="text" name = "name" value = {contacts.name} onChange={changeHandler} />
        <br></br><br></br><hr></hr>
        <label>Whatsapp Contact Number</label><br></br>
        <input placeholder='Contact Number' type="number" pattern="[0-9]{10}" name = "contact" value={contacts.contact} onChange={changeHandler}/>
        <br></br><br></br><hr></hr>
        <label>Email</label><br></br>
        <input placeholder='Email id' type="email" name = "email" value = {contacts.email} onChange={changeHandler} />
        <br></br><br></br><hr></hr>
        <label>Your message</label><br></br>
        <textarea placeholder='Enter your message' name='message' value = {contacts.message} onChange={changeHandler}></textarea>  
        <br></br><br></br><hr></hr><hr></hr>

        <button onClick={submitForm}><b>Submit</b></button>
        </div>
        
          <img src={logo} style={{justifyContent:'right', alignItems:'right'}}/>
        
      </div>
      <div className='teachers-div'>
        <h1 style={{color:'blueviolet', fontFamily:'revert-layer'}}>Our Teachers</h1>
          {<Ourteachers/>}
      </div>
      
    </>
  )
}

export default ContactUs