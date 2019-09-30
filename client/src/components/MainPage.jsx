import React from 'react';
import styled from 'styled-components';

import SearchBar from './main-page/SearchBar';
import SelectBar from './main-page/SelectBar';
import Slider from './main-page/slider/Slider';
import SelectedMovie from './main-page/SelectedMovie';

const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  justify-content: space-between;
  margin: 0 auto;
  max-height: 600px;
  max-width: 700px;
`;


class MainPage extends React.Component {
  render() {
    return(
      <MainPageContainer>
        <SearchBar
          text="find movie"
          />
        <SelectBar
          active={ this.props.sortBy }
          onSortSelect={ this.props.onSortSelect }
          />
        <Slider
          images={ this.props.movies }
          onMovieSelect={ this.props.onMovieSelect}
          />
        <SelectedMovie
          image={ this.props.selectedMovie }
          />
      </MainPageContainer>
    );
  }
}


export default MainPage;