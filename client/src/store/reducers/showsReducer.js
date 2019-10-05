// helper functions
const checkDay = () => {
  const day = new Date().getDay();
  // getDay returns value for given weekday counting from sunday, show property day starts counting from monday
  return day === 0 ? 6 : day - 1;
};

const filterShowList = list => list.filter(show => show.day >= checkDay());

// actual reducer
export default (state = [], action) => {
  switch (action.type) {
    case 'GET_SHOWS':
      return filterShowList(action.payload);
    default:
      return state;
  }
};
