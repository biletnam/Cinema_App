import React from 'react';

import Arrow from './styled/SlideArrowsStyle';

const RightArrow = props =>
  <Arrow
    onClick={ props.goToNextSlide }
    className="fa fa-chevron-right fa-2x"
    aria-hidden="true"
  />;

const LeftArrow = props =>
  <Arrow
    onClick={ props.goToPrevSlide }
    className="fa fa-chevron-left fa-2x"
    aria-hidden="true"
  />;

export { RightArrow, LeftArrow};
