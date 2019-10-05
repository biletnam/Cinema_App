// helper function
const toggleSeatReservation = (show, number) => {
  return show.seats.map(seat => {
    if (seat.number === number) {
      seat.isReserved = !seat.isReserved;
      return seat;
    }
    return seat;
  });
};

let updatedSeats;

// actual reducer
export default (state = {}, action) => {
  switch (action.type) {
    case 'GET_SHOW':
      return action.payload;
    case 'RESERVE_SEAT':
      updatedSeats = toggleSeatReservation(state, action.payload);
      return { ...state, seats: updatedSeats };
    default:
      return state;
  }
};
