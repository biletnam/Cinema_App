import React from 'react';

import Slider from './slider/Slider';

// TO BE REPLACED
import Image1 from '../images/judy.jpg';
import Image2 from '../images/lion-king.jpg';
import Image3 from '../images/rambo.jpg';
//

const images = [ // TO BE CHANGED FOR LIST FETCHED FROM DB AND SORTED BY POPULARITY
  Image3,
  Image2,
  Image1,
  Image3,
  Image2,
  Image1
];

const CarouselMostPopular = () => {
  return (
    <Slider images={ images } />
  );
}

export default CarouselMostPopular;