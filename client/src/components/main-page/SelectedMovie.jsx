import React from 'react';

import { MovieContainer, MoviePoster, Poster, ExpandIcon } from './styled/SelectedMovieStyle';

const SelectedMovie = props => {
  return (
    <MovieContainer>
      <MoviePoster to="movie-info">
        <Poster src={ props.image } alt="Movie Poster"/>
        <ExpandIcon className="fas fa-expand-arrows-alt" />
      </MoviePoster>
    </MovieContainer>
  );
}

export default SelectedMovie;