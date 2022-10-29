import "react-slideshow-image/dist/styles.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Carousel } from 'react-bootstrap'
import React, { useCallback, useState, useEffect} from 'react'
import school1 from '../Images/ActivityImages/School1.jpg'
import school2 from '../Images/ActivityImages/School2.jpg'
import school4 from '../Images/ActivityImages/School4.jpg'
import './PagesCss/schoolcelebrations.css';
import PicGallery from "./PicGallery";
import CarouselGallery from "./CarouselGallery";

export const SchoolImages = [{url:school1}, {url:school2}, {url:school4}]
//export const SchoolImages = ['../Images/ActivityImages/School4.jpg']
function SchoolPhotos() {
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
        { !carousel ? <PicGallery display="SchoolImages"/> : <CarouselGallery display="SchoolImages"/>}
        
    </div>
    
  )
}

export default SchoolPhotos
