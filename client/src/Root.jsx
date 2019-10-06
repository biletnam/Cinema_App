import React from 'react';
import { Provider } from 'react-redux';
import App from './components/App';
import Layout from './layout/Layout';

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
