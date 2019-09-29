import React from 'react';
import styled from 'styled-components';

const SlideImg = styled.img`
  display: inline-block;
  height: 118px;
  min-width: 80px;
  margin: 0 15px;
  z-index: 9;
  overflow: hidden;
  box-shadow: -4px -4px 8px rgba(196, 196, 196, 0.2), 4px 4px 8px rgba(196, 196, 196, 0.2);
  cursor: pointer;
`;

const Slide = props => <SlideImg src={props.image}></SlideImg>;

export default Slide;