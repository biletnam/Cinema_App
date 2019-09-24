import { TEST_REDUX_STORE } from '../const';

export const testReduxStore = () => async dispatch => {
  dispatch({
    type: TEST_REDUX_STORE,
    payload: 'Working...',
  });
};
