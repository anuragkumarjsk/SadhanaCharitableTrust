import React,{useEffect,useState} from 'react'

import axios from 'axios'
import './PagesCss/volunteer.css'
import { useNavigate } from 'react-router-dom'
function Volunteer() {  
  const navigate = useNavigate()
  const [buttondisabled,setbuttondisabled]=useState(true)
  const [formstate,setformstate]=useState({
      name: '',
      contactno: '',
      email: '',
      profession:'',
      institution: ''
  })
  const changeHandler = (e) => {
    setformstate({ ...formstate,[e.target.name] : e.target.value})
  }

  const submitHandler = e => {
    e.preventDefault();
    console.log(formstate);
    const url = 'https://sheet.best/api/sheets/0d2ceab4-7cef-4143-bd79-f1080b4b3bdf'
    axios.post(url,formstate)
    .then(response => {
      console.log(response);
      navigate('/success')
    })
    .catch(err => {
      console.log(err);
      navigate('/failiure')
    })
  }

useEffect(() => {
  if(formstate.name===''||
  formstate.contactno=== ''||
  formstate.email=== ''||
  formstate.profession===''||
  formstate.institution=== '')
  {setbuttondisabled(true)}
  else
  {setbuttondisabled(false)}

  return () => {
  }
}, [formstate])


  return (
    <div className='volunteer'>
          <h2 style={{fontFamily:'GTWalsheimPro-Bold',fontSize:'30px'}}>Volunteer Registration form</h2>
        <form className="form" >
          <div className='form-field'>
            <label>Name</label><br></br>
            <input placeholder='Enter your name' type="text" name = "name" value = {formstate.name} onChange={changeHandler} />
          </div>
          <div className='form-field'>
            <label>Contact No</label><br></br>
            <input type="tel" placeholder='Enter your contact number'  pattern="[0-9]{10}"  name = "contactno" value = {formstate.contactno} onChange={changeHandler} />
          </div>
          <div className='form-field'>
            <label>Email</label><br></br>
            <input placeholder='Enter your email id' type="text" name = "email" value = {formstate.email} onChange={changeHandler}  />
          </div>
          <div className='form-field'>
            <label>Occupation</label><br></br>
            <input placeholder='Enter your occupation'type="text" name = "profession" value = {formstate.profession} onChange={changeHandler} />
          </div>
          <div className='form-field'>
            <label>Institution</label><br></br>
            <input placeholder='Enter the name of college or company' type="text" name = "institution" value = {formstate.institution} onChange={changeHandler} />
          </div>
          <div className='form-field'>
          <button  className={`btn ${buttondisabled? "btnpassive":"btnactive"}`} type='submit' style={{cursor:'pointer'}}
           disabled={buttondisabled}
           onClick={submitHandler}>Submit</button>
          </div>
        </form>
    </div>
  )
}

export default Volunteer