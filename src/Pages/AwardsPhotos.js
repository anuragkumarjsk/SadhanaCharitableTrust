import "react-slideshow-image/dist/styles.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Carousel } from 'react-bootstrap'
import React, { useCallback, useState, useEffect} from 'react'
import A1 from '../Images/ActivityImages/A1.jpg'
import A2 from '../Images/ActivityImages/A2.jpg'
import A3 from '../Images/ActivityImages/A3.jpg'
import A4 from '../Images/ActivityImages/A4.jpg'
import A5 from '../Images/ActivityImages/A5.jpg'
import A6 from '../Images/ActivityImages/A6.jpg'
import './PagesCss/schoolcelebrations.css';
import PicGallery from "./PicGallery";
import CarouselGallery from "./CarouselGallery";

export const AwardsPhoto = [{url:A1}, {url:A2}, {url:A3}, {url:A4}, {url:A5}, {url:A6}]

function AwardsPhotos() {
    const [view, setView] = useState("View Larger Images")
    const [carousel, setCarousel] = useState(false)
    
    const handleCarouselClick= useCallback(() =>{
      setCarousel(!carousel)
      !carousel ? setView("View as gallery") : setView("View Larger Images")
    },[carousel])
    console.log(carousel)
    
  
    return (
      <div className="school-celeb">
        <h1 style={{color: 'red'}}>Our School</h1>
        <Button onClick={handleCarouselClick}>{view}</Button> 
          { !carousel ? <PicGallery display="AwardsPhotos"/> : <CarouselGallery display="AwardsPhotos"/>}
          
      </div>
      
    )
  }
export default AwardsPhotos
