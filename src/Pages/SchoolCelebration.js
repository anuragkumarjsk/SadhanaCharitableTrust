import "react-slideshow-image/dist/styles.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from 'react-bootstrap'
import React, { useCallback, useState } from 'react'
import SC1 from '../Images/ActivityImages/SC1.jpg'
import SC2 from '../Images/ActivityImages/SC2.jpg'
import SC3 from '../Images/ActivityImages/SC3.jpg'
import SC4 from '../Images/ActivityImages/SC4.jpg'
import SC5 from '../Images/ActivityImages/SC5.jpg'
import './PagesCss/schoolcelebrations.css';

const images = [{url:SC1}, {url:SC2}, {url:SC3}, {url:SC4}, {url:SC5}]

function SchoolCelebration() {
  const [img, setImg] = useState(0)
  const [carousel, setCarousel] = useState(false)

  const openCarousel = useCallback((ind) =>{
    console.log(ind)
    setCarousel(true)
  },[])

  const closeCarousel = useCallback((ind) =>{
    setCarousel(false)
  },[carousel])

  return (
    <div>
      <h1 style={{color: 'red'}}>Celebrations at school</h1>
      
      <div className='celebrations-gallery'>
        { !carousel ? <>
          {
          images.map((img, ind)=><a key={ind} href='' onClick={()=>openCarousel(ind)}><h1 style={{
          backgroundImage: `url(${img.url})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition:'center',
          backgroundSize:'210px',
          height: '200px',
          width:'auto'
          
          }} ></h1></a>)
          }
        </>
        :
        <div className='slide-container'>
         <Carousel className='carousel'>
          {
            images.map((img1,ind)=>{
              <Carousel.Item key={ind} className='activity-img' interval={1500} alt='SCTimg'>
                <img src={img1.url} />
              </Carousel.Item>
              })
          }
          
        </Carousel>
        
        </div>
        }
        </div>
        
      </div>
    
  )
}

export default SchoolCelebration
