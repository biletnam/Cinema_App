import movies from '../../services/movies';
import shows from '../../services/shows';

export const getMovies = () => async dispatch => {
  const response = await movies.get('/');

  dispatch({
    type: 'GET_MOVIES',
    payload: response.data,
  });
};

export const sortMovies = sortOption => dispatch => {
  dispatch({
    type: 'SORT_MOVIES',
    payload: sortOption,
  });
};

export const selectMovie = movie => dispatch => {
  dispatch({
    type: 'SELECT_MOVIE',
    payload: movie,
  });
};

export const getShows = () => async dispatch => {
  const response = await shows.get('/');

  dispatch({
    type: 'GET_SHOWS',
    payload: response.data,
  });
};
