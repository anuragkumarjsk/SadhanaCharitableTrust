import "react-slideshow-image/dist/styles.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Carousel } from 'react-bootstrap'
import React, { useCallback, useState, useEffect} from 'react'
import V1 from '../Images/ActivityImages/V1.jpg'
import V2 from '../Images/ActivityImages/V2.jpg'
import V3 from '../Images/ActivityImages/V3.jpg'
import V4 from '../Images/ActivityImages/V4.jpg'
import './PagesCss/schoolcelebrations.css';
import PicGallery from "./PicGallery";
import CarouselGallery from "./CarouselGallery";

export const VolunteeringPhoto = [{url:V1}, {url:V2}, {url:V3}, {url:V4}]

function VolunteeringPhotos() {
    const [view, setView] = useState("View Larger Images")
    const [carousel, setCarousel] = useState(false)
    
    const handleCarouselClick= useCallback(() =>{
      setCarousel(!carousel)
      !carousel ? setView("View as gallery") : setView("View Larger Images")
    },[carousel])
    console.log(carousel)
    
  
    return (
      <div className="school-celeb">
        <h1 style={{color: 'red'}}>Celebrations at school</h1>
        <Button onClick={handleCarouselClick}>{view}</Button> 
          { !carousel ? <PicGallery display="VolunteeringPhotos"/> : <CarouselGallery display="VolunteeringPhotos"/>}
          
      </div>
      
    )
  }

export default VolunteeringPhotos
