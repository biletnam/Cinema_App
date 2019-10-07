export default (state = {}, action) => {
  switch (action.type) {
    case 'GET_RESERVATION':
      return action.payload;
    case 'CREATE_RESERVATION':
      return Object.assign({}, state, {
        reservations: action.payload,
      });
    default:
      return state;
  }
};
