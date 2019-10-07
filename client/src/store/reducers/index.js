import { combineReducers } from 'redux';

import moviesReducer from './moviesReducer';
import movieReducer from './movieReducer';
import selectedMovieReducer from './selectedMovieReducer';
import showsReducer from './showsReducer';
import showReducer from './showReducer';
import reservationReducer from './reservationReducer';

export default combineReducers({
  movies: moviesReducer,
  selectedMovie: selectedMovieReducer,
  movie: movieReducer,
  shows: showsReducer,
  show: showReducer,
  reservation: reservationReducer,
});
