import React from 'react';
import styled from 'styled-components';

const Arrow = styled.i`
  color: ${props => props.theme.colors.secondaryTrans};
  z-index: 10;
  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

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
