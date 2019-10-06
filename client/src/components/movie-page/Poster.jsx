import React from 'react';

import { MovieContainer } from '../main-page/styled/SelectedMovieStyle';
import { PosterContainer, Poster } from './styled/MovieInfoContainer';
import Loader from '../Loader';

const base_url = 'https://image.tmdb.org/t/p/w500';

const SelectedMovie = props => {
  return (
    <MovieContainer>
        { props.selectedMovie ?
        (<PosterContainer>
          <Poster src={`${base_url}${props.selectedMovie.poster_path}`} alt="Movie Poster"/>
        </PosterContainer>) :
        <Loader />
        }
    </MovieContainer>
  );
}

export default SelectedMovie;