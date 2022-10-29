import "react-slideshow-image/dist/styles.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from 'react-bootstrap'
import React, { useCallback, useState, useEffect} from 'react'
import './PagesCss/carouselgallery.css';
import { celebrationImages } from './SchoolCelebration';
import {SchoolImages} from './SchoolPhotos'
import {VolunteeringPhoto} from './VolunteeringPhotos'
import { AwardsPhoto } from './AwardsPhotos';


function CarouselGallery(props) {
  let images;
  if ((props.display) === 'SchoolCelebration')
    images = celebrationImages
  else if (props.display === 'SchoolImages')
    images = SchoolImages
  else if (props.display === 'VolunteeringPhotos')
    images = VolunteeringPhoto
  else if (props.display === 'AwardsPhotos')
    images = AwardsPhoto

  return (
    <div>
      <div className='slide-container'>
      <Carousel>   
      {images.map((img, ind) => (
        <Carousel.Item key={ind} className='activity-img' interval={1000} alt='SCTimg'>
        <img className={ind} src={img.url}/>
        <Carousel.Caption>
          <h3>{img.cap}</h3>
        </Carousel.Caption>
        </Carousel.Item>
      ))}       

      </Carousel>
        </div>
    </div>
  )
}

export default CarouselGallery
