import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { image1, image2, image3 } from '../../index'

function MyCarousel() {
  return (
    <Carousel>
      <div>
        <img src={image1} alt="Slide 1" />
        <p className="legend">Legenda 1</p>
      </div>
      <div>
        <img src={image2} alt="Slide 2" />
        <p className="legend">Legenda 2</p>
      </div>
      <div>
        <img src={image3} alt="Slide 3" />
        <p className="legend">Legenda 3</p>
      </div>
    </Carousel>
  );
}

export default MyCarousel;
