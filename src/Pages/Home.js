import React, { useCallback, useEffect, useState } from 'react'
import backImage from '../Images/Background1.jpg'
import './PagesCss/home.css'
function Home() {
  const [teacher, setTeacher] = useState(0);
  const [students, setStudents] = useState(0);
  const [volunteers, setVolunteer] = useState(0);
  const [awards, setAward] = useState(0);
  const Count = [{'teacherNo':20, 'teacherVar':teacher, 'teacherFun': setTeacher},]

  useEffect(() =>{
    let count = teacher<20 &&  setInterval(()=>{
      setTeacher(prevCount => {return prevCount+1})
    },100)     
    return () => clearInterval(count)  
  },[teacher])

  useEffect(() =>{
    let studentCount = students < 200 && setInterval(()=>{
      setStudents(prevCount => {return prevCount+1})
    },10)  
    return () => clearInterval(studentCount)
  },[students])

  useEffect(() =>{
    let volunteerCount = volunteers < 100 && setInterval(()=>{
      setVolunteer(prevCount => {return prevCount+1})
    },10)  
    return () => clearInterval(volunteerCount)
  },[volunteers])

  useEffect(() =>{
    let awardCount = volunteers < 50 && setInterval(()=>{
      setAward(prevCount => {return prevCount+1})
    },40)  
    return () => clearInterval(awardCount)
  },[awards])

  return (
    
    <div >
      <div className="jumbotron" style={{
        backgroundImage: `url(${backImage})`,
        backgroundAttachment:'fixed'
       }}>
      
          <h1 style={{color:'purple', 
              alignContent:'center',
              fontFamily:' Tahoma',
              paddingTop:'60px',
              fontSize:'50px'}}>
          <b>SADHANA CHARITABLE TRUST</b>
          </h1>
        
      </div>
      <div className='info-card'>
       <div className='info'>
        <p><h2>{teacher}+</h2>Teachers Working</p>
       </div>
       <div className='info'>
       <p><h2>{students}+</h2>Students at the trust</p>
       </div>
       <div className='info'>
       <p><h2>{volunteers}+</h2>Volunteers working with us</p>
       </div>
       <div className='info'>
       <p><h2>{awards}+</h2>Awards received</p>
       </div>
      </div>
    </div>
  )
}

export default Home