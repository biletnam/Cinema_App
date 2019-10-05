import React from 'react';

import { RatingContainer } from './styled/MovieInfoContainer';

const Rating = props => {
  return (
    <RatingContainer>
        Rating: {`${props.selectedMovie.vote_average}`}
    </RatingContainer>
  );
}

export default Rating;