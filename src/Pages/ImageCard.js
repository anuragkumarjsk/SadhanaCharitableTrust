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
    <div className='img-card-img-div'>
    <img src={props.photoIcon}></img>
    </div>
    <div className='view-img-button'><p>{props.activity}</p><Button onClick={()=>{routeChange(link)}}>View all Photos</Button></div>
    </div>
  )
}

export default ImageCard