import React from 'react';

import Slide from './slider/Slide';
import { RightArrow, LeftArrow } from './slider/SliderArrows';

import { Slides, SlideContainer, ArrowContainer } from './styled/SliderStyle';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      translateValue: prevState.translateValue + 110
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
      translateValue: prevState.translateValue - 110
    }));
  }

  render() {
    return (
      <Slides>

        <SlideContainer translate={this.state.translateValue}>
          {/* index to be replaced by id of movie, when we have movie list fetched from db */}
          { this.props.images.map((image, i) => <Slide key={i} image={image} onMovieSelect={ this.props.onMovieSelect }/>)}
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