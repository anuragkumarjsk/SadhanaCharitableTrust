import React from "react";
import "react-slideshow-image/dist/styles.css";
import School from '../Images/ActivityImages/School1.jpg'
import SC from '../Images/ActivityImages/SC3.jpg'
import imgv1 from '../Images/ActivityImages/V1.jpg'
import imga1 from '../Images/ActivityImages/A1.jpg'
import imgsports1 from '../Images/ActivityImages/S1.jpg'
import './PagesCss/activities.css'
import ImageCard from "./ImageCard";
import 'bootstrap/dist/css/bootstrap.css';


export default function Activities() {
  return (

    <div>
  
      <h1>Image Gallery</h1>
      <div className="display-cards">
      <ImageCard activity="School celebrations" photoIcon={SC} link='/SchoolCelebration'/>
      <ImageCard activity="School Images" photoIcon={School} link='/School'/>
      <ImageCard activity="Volunteering" photoIcon={imgv1} link='/Volunteering'/>
      <ImageCard activity="Awards" photoIcon={imga1} link='/Awards'/>
      <ImageCard activity="Sports" photoIcon={imgsports1} link='/Sports'/>
      </div>
      
     
      {/* </div>  */}
    </div>
  );
}