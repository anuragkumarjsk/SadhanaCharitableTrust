import React from 'react'
import { Button } from 'react-bootstrap'
import './PagesCss/imagecard.css'
import { useNavigate } from "react-router-dom";

const ImageCard = (props) =>  {
  const link = props.link
  let navigate = useNavigate();
  const routeChange = (newPath) =>{
    let path = newPath;
    navigate(path)
  }
  return (
    <div className='image-card'>
    <div className='img-card-img-div'></div>
    <div className='title'><h1
    style={{
          backgroundImage: `url(${props.photoIcon})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition:'center',
          backgroundSize:'250px',
          justifyContent: 'center',
          height: '170px',
          width:'100%',
          marginTop:'15px'
        }}></h1></div>
    <div className='view-img-button'><p style={{fontSize:'18px'}} >{props.activity}</p><Button style={{fontSize:'15px'}} onClick={()=>{routeChange(link)}}>View all Photos</Button></div>
    </div>
  )
}

export default ImageCard
