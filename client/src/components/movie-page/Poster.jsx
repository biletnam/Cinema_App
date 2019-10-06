import React from 'react';

import { PosterContainer, Poster } from './styled/MovieInfoContainer';

const base_url = 'https://image.tmdb.org/t/p/w500';

const SelectedMovie = props => {
  return (
    <PosterContainer>
      <Poster src={`${base_url}${props.selectedMovie.poster_path}`} alt="Movie Poster"/>
    </PosterContainer>
  );
}

export default SelectedMovie;