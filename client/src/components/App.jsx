import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import SearchBar from './SearchBar';
import SelectBar from './SelectBar';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <SearchBar text="find movie" />
      <SelectBar />
    </BrowserRouter>
  );
}

export default App;
