import React from 'react'
import './PagesCss/contactus.css'
const img1 = require('../../src/Assets/Images/SCT.jpeg')

function ContactUs() {
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
                <div style={{width:'20%',height:'auto',display:'grid',placeItems:'center',border:'1px solid grey',borderRadius:'4px',backgroundColor:'rgba(7,3,1,0.1)',padding:'10px',margin:'10px 20px',boxShadow: '0px -6px 12px rgba(0, 0, 0, 0.06)'}}>
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
      <div style={{width:'100vw',minHeight:'100vh',height:'auto',background:'aqua',padding:'20px'}}>
        <h1>Our Teachers</h1>
          {<Ourteachers/>}
      </div>
    </>
  )
}

export default ContactUs