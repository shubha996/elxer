import React from 'react'
import './CarouselComponent.css';
import Carousel from 'react-bootstrap/Carousel';
import carouselImages from '../../../assets/images/carouselImagesData';

const CarouselComponent = () => {

  return (
    <>
      <Carousel fade>
        {
          carouselImages.map((data)=>{
            return(
                <Carousel.Item>
                  <div id="carouselImage" >
                    <img className='d-block w-100' key={data.id} src={data.url} alt="Elxer Banner" />
                  </div>
                </Carousel.Item>
            )
          })
        }
      </Carousel>
    </>
  )
}

export default CarouselComponent;


