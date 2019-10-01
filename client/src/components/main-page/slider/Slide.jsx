import React from 'react';

import SlideImg from './styled/SlideStyle';

const Slide = props => <SlideImg
  src={props.image}
  onClick={() => props.onMovieSelect(props.image)}
  ></SlideImg>;

export default Slide;