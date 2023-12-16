import React, { useCallback, useEffect, useState } from 'react'
import backImage from '../Images/Background1.jpg'
import school from '../Images/ActivityImages/School2.jpg'
import BBPanda from '../Assets/Images/BBPanda.jpeg'

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

    <div style={{minHeight:'100vh', height:'auto'}}>
      <div className="jumbotron" style={{
        backgroundImage: `url(${backImage})`,
        backgroundAttachment:'fixed',
        opacity:'70%'
       }}>

          <h1 style={{color:'white',
              alignContent:'center',
              fontFamily:' Tahoma',
              padding:'20px',
              opacity:'95%',
              fontSize:'60px',
              textSizeAdjust:'auto'}}>
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
       <h1 style={{fontWeight:700}}>
            " Educate to Empower "
       </h1>
       <h3><b style={{fontSize:'25px'}}>ABOUT SADHANA CHARITABLE TRUST</b></h3>
       <p style={{fontSize:'20px',padding:'10px'}}>Sadhana Charitable Trust is working towards building a empowered and vibrant society by educating tribal and under previldged kids through our dedicated efforts of all the associates.
          we not only educate them but also inculcate social sensitivity and prepare them to face the competitive environment through extra curricular and activity based learning.
          We have started a library, adult education centre and and old age home for the benefit of the society.

          Let's join hands to give back to the society...

        </p>
      </div>
      <div style={{backgroundColor:'wheat', margin:'15px', padding:'7px'}}>
      <h3><b style={{fontSize:'25px'}}>BIRSA MUNDA SCHOOL</b></h3>
      <p style={{fontSize:'20px',padding:'10px'}}>
      <b>Birsa Munda School was the brain child of few philanthropic NIT Rourkela alumni  and other philanthropist which started as a small inititiative since 2001 and took shape in 2006. We have successfully completed 20+ years to educate the needy students by the support of our associates. The school is running by the kind support of our associates/volunteers with nearly 200 students.
The support from few professors of NIT Rourkela and young students have made it possible to complete the journey of 20+ years through many ups and downs.
Sadhana Charitable Trust has made it possible to run the initiative "Educate to Empower" for educating the kids of this tribal and poor community.
<br></br>
We are happy to inform you all that few of our kids are studying/working in reputed organizations. 
<br></br>
Let's unite to strengthen the cause for building a socially sensitive ecosystem which helps in nation building.
We thank our associates for their great support for giving back to the society...
<br></br>
Jai Hind.</b></p>
      <span>
             <h2 style={{fontSize:'40px'}}>Man behind the Mission</h2>
             <h4 style={{fontSize:'25px'}}>B.B.Panda</h4>
             <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
             <img style={{borderRadius:'50%',width:'250px',height:'250px'}} src={BBPanda} alt='bb panda'/>
             <p style={{ fontSize:'20px',padding:'10px'}}>
               Our School is blessed to have such a great visionary leader, who has dedicated years of his life for nurturing the youth. Under his able leadership our school is growing and progressing day by day, towarda a better future 
               and is also contributing to the nation by preparing youth that is educated, rational, constructive and patriotic. Our students wherever they go will carry with them the
               blessings and the teaching that has been provided to them by inspiring personalities like Mr Panda and will ensure to do good for the community wherever they go. We are grateful for all the sacrifices made by Mr Panda.  
             </p>
             </div>
      </span>

      </div>
      </div>
    </div>
  )
}

export default Home
