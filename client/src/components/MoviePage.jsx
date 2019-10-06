import React from 'react';

import MoviePageContainer from './styled/MoviePageStyle';
import Poster from './movie-page/Poster';
import MovieDetails from './movie-page/MovieDetails';
import Screenings from './movie-page/Screenings';

class MoviePage extends React.Component {

  render() {
    return(
      <MoviePageContainer>
        <MovieDetails
          selectedMovie={ this.props.selectedMovie }
        />
        <Screenings
          movie={ this.props.selectedMovie }
        />
        <Poster
          selectedMovie={ this.props.selectedMovie }
        />
      </MoviePageContainer>
    );
  }
}


export default MoviePage;