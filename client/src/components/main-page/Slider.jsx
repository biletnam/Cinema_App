import React from 'react';

import Slide from './slider/Slide';
import { RightArrow, LeftArrow } from './slider/SliderArrows';

import { Slides, SlideContainer, ArrowContainer } from './styled/SliderStyle';
import Loader from '../Loader';

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
    if (this.state.currentIndex === this.props.movies.length - 1) {
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

  renderSlides() {
    return this.props.movies.map((movie) => <Slide
    key={movie._id}
    movie={movie}
    onMovieSelect={ this.props.onMovieSelect }
  />);
  }

  render() {
    return (
      <Slides>

        <SlideContainer translate={this.state.translateValue}>
          { this.props.movies.length === 0 ?
            <Loader>LOADING</Loader> :
            this.renderSlides()}
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