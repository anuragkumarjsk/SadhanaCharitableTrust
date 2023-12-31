import "react-slideshow-image/dist/styles.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Carousel } from 'react-bootstrap'
import React, { useCallback, useState, useEffect} from 'react'
import SC1 from '../Images/ActivityImages/SC1.jpg'
import SC2 from '../Images/ActivityImages/SC2.jpg'
import SC3 from '../Images/ActivityImages/SC3.jpg'
import SC4 from '../Images/ActivityImages/SC4.jpg'
import SC5 from '../Images/ActivityImages/SC5.jpg'
import SC6 from '../Images/ActivityImages/SC6.jpg'
import './PagesCss/schoolcelebrations.css';
import PicGallery from "./PicGallery";
import CarouselGallery from "./CarouselGallery";

export const celebrationImages = [{url:SC1}, {url:SC2}, {url:SC3}, {url:SC4}, {url:SC5}, {url:SC6}]

function SchoolCelebration() {
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
        { !carousel ? <PicGallery display="SchoolCelebration"/> : <CarouselGallery display="SchoolCelebration"/>}
        
    </div>
    
  )
}

export default SchoolCelebration
