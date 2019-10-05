import React from 'react';

// import { MovieContainer } from '../main-page/styled/SelectedMovieStyle';
import { MovieDetailsContainer } from './styled/MovieInfoContainer';
import Title from './Title';
import Rating from './Rating';
import Overview from './Overview';

const MovieDetails = props => {
  return (
    <MovieDetailsContainer>
        <Title
          selectedMovie={ props.selectedMovie }
        />
       <Rating 
          selectedMovie={ props.selectedMovie }
        />      
       <Overview 
          selectedMovie={ props.selectedMovie }
        />   
    </MovieDetailsContainer>
  );
}

export default MovieDetails;