import React from 'react';

import SlideImg from './styled/SlideStyle';

const base_url = 'https://image.tmdb.org/t/p/w500';

const Slide = props => <SlideImg
  src={`${base_url}${props.movie.poster_path}`}
  onClick={() => props.onMovieSelect(props.movie)}
  ></SlideImg>;

export default Slide;