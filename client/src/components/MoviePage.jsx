import React from 'react';

import MainPageContainer from './styled/MainPageStyle';
import Poster from './movie-page/Poster';
import MovieDetails from './movie-page/MovieDetails';

class MoviePage extends React.Component {

  render() {
    return(
      <MainPageContainer>
        <MovieDetails
          selectedMovie={ this.props.selectedMovie }
        />
        <Poster
          selectedMovie={ this.props.selectedMovie }
        />
      </MainPageContainer>
    );
  }
}


export default MoviePage;