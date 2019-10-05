import { sortOptions } from '../../components/main-page/SelectBar';

// helper function
const sortMovieList = (list, sortOption) => {
  switch (sortOption) {
    case sortOptions[0]:
      return [...list].sort((a, b) => b.popularity - a.popularity);
    case sortOptions[1]:
      return [...list].sort((a, b) => b.vote_average - a.vote_average);
    default:
      return list;
  }
};

// actual reducer
export default (state = [], action) => {
  switch (action.type) {
    case 'GET_MOVIES':
      return action.payload;
    case 'SORT_MOVIES':
      return sortMovieList(state, action.payload);
    default:
      return state;
  }
};
