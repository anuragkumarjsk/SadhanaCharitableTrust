import React from 'react'
import "react-slideshow-image/dist/styles.css";
import 'bootstrap/dist/css/bootstrap.css';
import './PagesCss/picgallery.css';
import { celebrationImages } from './SchoolCelebration';
import {SchoolImages} from './SchoolPhotos'
import {VolunteeringPhoto} from './VolunteeringPhotos'
import { FaBorderAll } from 'react-icons/fa';
import { AwardsPhoto } from './AwardsPhotos';
import {SportsImages} from './SportsPhotos'

function PicGallery(props) {
  let images;
  if ((props.display) === 'SchoolCelebration')
    images = celebrationImages
  else if (props.display === 'SchoolImages')
    images = SchoolImages
  else if (props.display === 'VolunteeringPhotos')
    images = VolunteeringPhoto
  else if (props.display === 'AwardsPhotos')
    images = AwardsPhoto
  else if (props.display === 'SportsImages')
    images = SportsImages
  return (
    <div>
      
      <div className='celebrations-gallery'>
        
          {
          images.map((img, ind)=><img src= {img.url} style={{
          marginRight: '20px',
          height: '190px',
          width:'220px',
          padding:'10px'
          }} ></img>)
          }
        
        
        </div>
    </div>
  )
}

export default PicGallery
