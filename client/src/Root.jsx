import React from 'react';
import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import App from './components/App';
import Layout from './layout/Layout';
// import reducers from './store/reducers';

import { initializeStore } from './store';
const store = initializeStore();

export default function Root() {
  return (
    <Provider store={store}>
      <Layout>
        <App />
      </Layout>
    </Provider>
  );
}
