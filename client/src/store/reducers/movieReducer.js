export default (state = null, action) => {
  switch (action.type) {
    case 'GET_MOVIE':
      return action.payload;
    default:
      return state;
  }
};
