import React from 'react';

import { MovieContainer, MoviePoster, Poster, ExpandIcon } from './styled/SelectedMovieStyle';
import Loader from './Loader';

const base_url = 'https://image.tmdb.org/t/p/w500';

const SelectedMovie = props => {
  return (
    <MovieContainer>
        { props.selectedMovie ?
        (<MoviePoster to="movie-info">
          <Poster src={`${base_url}${props.selectedMovie.poster_path}`} alt="Movie Poster"/>
          <ExpandIcon className="fas fa-expand-arrows-alt" />
        </MoviePoster>) :
        <Loader />
        }
    </MovieContainer>
  );
}

export default SelectedMovie;