// actual reducer
export default (state = [], action) => {
  switch (action.type) {
    case 'GET_RESERVATIONS':
      return action.payload;
    default:
      return state;
  }
};
