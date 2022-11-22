import "react-slideshow-image/dist/styles.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Carousel } from 'react-bootstrap'
import React, { useCallback, useState, useEffect} from 'react'
import sports1 from '../Images/ActivityImages/sports1.jpg'
import sports2 from '../Images/ActivityImages/sports2.jpg'
import sports3 from '../Images/ActivityImages/sports3.jpg'
import sports4 from '../Images/ActivityImages/sports4.jpg'
import sports5 from '../Images/ActivityImages/sports5.jpg'
import './PagesCss/schoolcelebrations.css';
import PicGallery from "./PicGallery";
import CarouselGallery from "./CarouselGallery";

export const SportsImages = [{url:sports1}, {url:sports2}, {url:sports4}, {url:sports3}, {url: sports5}]
//export const SchoolImages = ['../Images/ActivityImages/School4.jpg']
function SportsPhotos() {
  const [view, setView] = useState("View Larger Images")
  const [carousel, setCarousel] = useState(false)
  
  const handleCarouselClick= useCallback(() =>{
    setCarousel(!carousel)
    !carousel ? setView("View as gallery") : setView("View Larger Images")
  },[carousel])
  console.log(carousel)
  

  return (
    <div className="school-celeb">
      <h1 style={{color: 'red'}}>Sports Events</h1>
      <Button onClick={handleCarouselClick}>{view}</Button> 
        { !carousel ? <PicGallery display="SportsImages"/> : <CarouselGallery display="SportsImages"/>}
        
    </div>
    
  )
}

export default SportsPhotos
