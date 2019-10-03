import styled from 'styled-components';

export const Slides = styled.div`
  height: 126px;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

export const SlideContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  height: 100%;
  transition: transform ease-out 0.5s;
  transform: translateX(${props => props.translate}px);
`;

export const ArrowContainer = styled.div`
  display: flex;
  height: 0;
  justify-content: space-between;
  padding: 0 10px;
  position: relative;
  top: -80px;
`;
