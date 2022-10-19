import React from "react";
import "react-slideshow-image/dist/styles.css";
import image1 from '../Images/image1.jpg'
import image2 from '../Images/image2.jpg'
import image3 from '../Images/image3.jpg'
import image4 from '../Images/image4.jpg'
import image5 from '../Images/image5.jpg'
import image6 from '../Images/image6.jpg'
import image7 from '../Images/image7.jpg'
import image8 from '../Images/image8.jpg'
import './PagesCss/activities.css'
import { Carousel } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.css';

const Images = [
  {url:image1, cap: 'Children Praying'}, {url:image2, cap: 'Children with volunteers'}, {url:image3, cap: 'Group photo'},
  {url:image4, cap: 'Children at School'}, {url:image5, cap: 'Winners'}, {url:image6, cap: 'Children Playing'},{url:image7, cap: 'Teachers Day Celebration'},
  {url:image8, cap: 'Celebrations'}
]
export default function App() {
  return (
    <div className="slide-container">
    <h1>Activities at Sadhana Charitable Trust</h1>
    <Carousel>   
      {Images.map((img, ind) => (
        <Carousel.Item className='activity-img' interval={1500} alt='SCTimg'>
        <img className={ind} src={img.url}/>
        <Carousel.Caption>
          <h3>{img.cap}</h3>
        </Carousel.Caption>
        </Carousel.Item>
      ))}       
      
      </Carousel>
    </div>
  );
}
