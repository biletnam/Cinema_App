import React from 'react';

import MainPageContainer from './styled/MainPageStyle';
import Poster from './movie-page/Poster';
import MovieDetails from './movie-page/MovieDetails';


import movies from '../api/movies';
const base_url = 'https://image.tmdb.org/t/p/w500';

class MoviePage extends React.Component {


  render() {
    return(
      <MainPageContainer>
       <MovieDetails 
            title= ""
            rating=""
            overview=""
        />
        <Poster
          selectedMovie={ this.props.selectedMovie }
          />
      </MainPageContainer>
    );
  }
}


export default MoviePage;