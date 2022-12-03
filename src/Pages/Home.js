import React, { useCallback, useEffect, useState } from 'react'
import backImage from '../Images/Background1.jpg'
import './PagesCss/home.css'
function Home() {
  const [teacher, setTeacher] = useState(0);
  const [students, setStudents] = useState(0);
  const [volunteers, setVolunteer] = useState(0);
  const [awards, setAward] = useState(0);
  


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
        backgroundAttachment:'fixed',
        opacity:'70%'
       }}>
      
          <h1 style={{color:'green',
              alignContent:'center',
              fontFamily:' Tahoma',
              paddingTop:'60px',
              opacity:'95%',
              fontSize:'80px'}}>
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
       <div style={{backgroundColor:'wheat', margin:'15px', padding:'7px'}}>
       <h3><b>ABOUT SADHANA CHARITABLE TRUST</b></h3><p>Sadhana Charitable Trust is working towards building a empowered and vibrant society by educating tribal and under previldged kids through our dedicated efforts of all the associates.
          we not only educate them but also inculcate social sensitivity and prepare them to face the competitive environment through extra curricular and activity based learning.
          We have started a library, adult education centre and and old age home for the benefit of the society.
 
          Let's join hands to give back to the society...
      
        </p>
      </div>
      </div>
    </div>
  )
}

export default Home