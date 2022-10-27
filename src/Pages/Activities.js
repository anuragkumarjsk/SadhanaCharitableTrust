import React from "react";
import "react-slideshow-image/dist/styles.css";
import logo from '../Images/logo.jpg'

import School from '../Images/ActivityImages/School1.jpg'
import SC from '../Images/ActivityImages/SC3.jpg'
import imgv1 from '../Images/ActivityImages/V1.jpg'
import imga1 from '../Images/ActivityImages/A1.jpg'
import './PagesCss/activities.css'
import { Carousel } from "react-bootstrap"
import ImageCard from "./ImageCard";
import 'bootstrap/dist/css/bootstrap.css';
import SchoolCelebration from "./SchoolCelebration";


// const Images = [
//   {url:image1, cap: 'Children Praying'}, {url:image2, cap: 'Children with volunteers'}, {url:image3, cap: 'Group photo'},
//   {url:image4, cap: 'Children at School'}, {url:image5, cap: 'Winners'}, {url:image6, cap: 'Children Playing'},{url:image7, cap: 'Teachers Day Celebration'},
//   {url:image8, cap: 'Celebrations'}
// ]
export default function App() {
  return (

    <div>
    
    {/* <h1>Activities at Sadhana Charitable Trust</h1>
    <div className="img-div"> <img className="back-img" src={logo}/> </div>
    <div className="overlap-div">
    <Carousel className="carousel">   
      {Images.map((img, ind) => (
        <Carousel.Item className='activity-img' interval={1500} alt='SCTimg'>
        <img className={ind} src={img.url}/>
        <Carousel.Caption className="caption">
          <h3>{img.cap}</h3>
        </Carousel.Caption>
        </Carousel.Item>
      ))}       
      
      </Carousel>  */}
      <h1>Image Gallery</h1>
      <div className="display-cards">
      <ImageCard activity="School celebrations" photoIcon={SC} link='/SchoolCelebration'/>
      <ImageCard activity="School Images" photoIcon={School} link='/School'/>
      <ImageCard activity="Volunteering" photoIcon={imgv1} link='/Volunteering'/>
      <ImageCard activity="Awards" photoIcon={imga1} link='/Awards'/>
      </div>
      
     
      {/* </div>  */}
    </div>
  );
}
