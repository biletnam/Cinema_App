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

export const getMovie = id => async dispatch => {
  const response = await movies.get(`/${id}`);
  dispatch({
    type: 'GET_MOVIE',
    payload: response.data,
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

export const getShow = id => async dispatch => {
  const response = await shows.get(`/${id}`);
  dispatch({
    type: 'GET_SHOW',
    payload: response.data,
  });
};

export const reserveSeat = seatNo => dispatch => {
  dispatch({
    type: 'RESERVE_SEAT',
    payload: seatNo,
  });
};
