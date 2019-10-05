import { combineReducers } from 'redux';

import moviesReducer from './moviesReducer';
import movieReducer from './movieReducer';
import showsReducer from './showsReducer';

export default combineReducers({
  movies: moviesReducer,
  selectedMovie: movieReducer,
  shows: showsReducer,
});
