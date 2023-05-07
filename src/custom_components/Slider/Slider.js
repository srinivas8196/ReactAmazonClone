import React from 'react'
import Slide1 from '../assets/img/slide1.jpg'
import Slide2 from '../assets/img/slide2.jpg'
import Slide3 from '../assets/img/slide3.jpg'
export default function Slider() {
  return (
    <>
     <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={Slide1} alt="First slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Slide2} alt="Second slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Slide3} alt="Third slide"/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  )
}

