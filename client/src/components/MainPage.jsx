import React from 'react';

import SearchBar from './main-page/SearchBar';
import RepertoireBar from './main-page/ReportoireBar';
import { SelectBar } from './main-page/SelectBar';
import Slider from './main-page/Slider';
import SelectedMovie from './main-page/SelectedMovie';

import MainPageContainer from './styled/MainPageStyle';

class MainPage extends React.Component {
  render() {
    return(
      <MainPageContainer>
        <SearchBar
          text="find movie"
          />
        <RepertoireBar />
        <SelectBar
          sortBy={ this.props.sortBy }
          onSortSelect={ this.props.onSortSelect }
          />
        <Slider
          movieList={ this.props.movieList }
          onMovieSelect={ this.props.onMovieSelect}
          />
        <SelectedMovie
          selectedMovie={ this.props.selectedMovie }
          />
      </MainPageContainer>
    );
  }
}


export default MainPage;