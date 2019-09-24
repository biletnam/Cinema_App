import { TEST_REDUX_STORE } from '../const';

export default (state = null, action) => {
  switch (action.type) {
    case TEST_REDUX_STORE:
      return action.payload;
    default:
      return state;
  }
};
