import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import SearchBar from './SearchBar';
import SelectBar from './SelectBar';
import CarouselMostPopular from './CarouselMostPopular';
import CarouselBestRated from './CarouselBestRated';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <SearchBar text="find movie" />
      <SelectBar />
      <Route path="/" exact component={ CarouselMostPopular} />
      <Route path="/most-popular" component={ CarouselMostPopular} />
      <Route path="/best-rated" component={ CarouselBestRated} />
    </BrowserRouter>
  );
}

export default App;
