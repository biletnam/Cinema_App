import React from 'react';

import { MovieContainer, MoviePoster, Poster } from '../main-page/styled/SelectedMovieStyle';


const base_url = 'https://image.tmdb.org/t/p/w500';

const MovieDetails = props => {
  return (
    <MovieContainer>
       <div>
           {props.title}
       </div>
       <div>
           Rating: {props.rating}
       </div>
       <div>
           {props.overview}
       </div>       
    </MovieContainer>
  );
}

export default MovieDetails;