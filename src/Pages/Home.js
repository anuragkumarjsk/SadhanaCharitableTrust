import React, { useCallback, useEffect, useState } from 'react'
import backImage from '../Images/Background1.jpg'
import './PagesCss/home.css'
function Home() {
  const [teacher, setTeacher] = useState(0);
  const [students, setStudents] = useState(0);

  const increaseCount = useEffect(() =>{
    for(let i=0;i<30;i++){
      setTeacher(teacher+1)}
    return ()=> teacher
  })

  return (
    
    <div >
      <div class="jumbotron" style={{
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
       <div className='info' onLoad={increaseCount}>
        <p><h2>{teacher}+</h2>Teachers Working</p>
       </div>
       <div className='info'>
       <p><h2>200+</h2>Students at the trust</p>
       </div>
       <div className='info'>
       <p><h2>100+</h2>Volunteers working with us</p>
       </div>
       <div className='info'>
       <p><h2>50+</h2>Awards received</p>
       </div>
      </div>
    </div>
  )
}

export default Home