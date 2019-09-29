import React from 'react';
import styled from 'styled-components';

import Slide from './Slide';
import { RightArrow, LeftArrow } from './SliderArrows';

const Slides = styled.div`
  height: 126px;
  margin-top: 25px;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const SlideContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  height: 100%;
  transition: transform ease-out .45s;
  transform: translateX(${props=>props.translate}px);
`;

const ArrowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  position: relative;
  top: -80px;
`;

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // images: [ // TO BE RENOVED (instead urls will be passed as props)
      //   Image1,
      //   Image2,
      //   Image3,
      //   Image2,
      //   Image1,
      //   Image3
      // ],
      currentIndex: 0,
      translateValue: 0
    };
  }

  goToPrevSlide = () => {
    if (this.state.currentIndex === 0) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex -1,
      translateValue: prevState.translateValue + 100
    }));
  }

  goToNextSlide = () => {
    if (this.state.currentIndex === this.props.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex +1,
      translateValue: prevState.translateValue - 100
    }));
  }

  render() {
    return (
      <Slides>
        <SlideContainer translate={this.state.translateValue}>
          { this.props.images.map((image, i) => <Slide key={i} image={image} />)}
        </SlideContainer>
        <ArrowContainer>
          <LeftArrow
            goToPrevSlide={ this.goToPrevSlide }
          />
          <RightArrow
            goToNextSlide={ this.goToNextSlide }
          />
        </ArrowContainer>
      </Slides>
    );
  }
}

export default Slider;