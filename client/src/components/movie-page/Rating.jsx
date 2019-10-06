import React from 'react';

import { RatingContainer } from './styled/MovieInfoContainer';

const Rating = props => {
  return (
    <RatingContainer>
      Rating: {props.selectedMovie.vote_average} ({props.selectedMovie.vote_count} votes)
    </RatingContainer>
  );
}

export default Rating;