import React from 'react';

import { MovieContainer, MoviePoster, Poster} from '../main-page/styled/SelectedMovieStyle';
import Loader from '../Loader';

const base_url = 'https://image.tmdb.org/t/p/w500';

const SelectedMovie = props => {
  return (
    <MovieContainer>
        { props.selectedMovie ?
        (<MoviePoster>
          <Poster src={`${base_url}${props.selectedMovie.poster_path}`} alt="Movie Poster"/>
        </MoviePoster>) :
        <Loader />
        }
    </MovieContainer>
  );
}

export default SelectedMovie;