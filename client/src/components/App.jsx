import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import MainPage from './MainPage';

import movies from '../api/movies';

// to be removed
import Image1 from '../images/judy.jpg';
import Image2 from '../images/lion-king.jpg';
import Image3 from '../images/rambo.jpg';
// ----

class App extends React.Component {
  state = {
    movies: [ // actual list of images will be fetched from db
      Image1,
      Image2,
      Image3,
      Image1,
      Image2,
      Image3
    ],
    selectedMovie: Image1,
    sortBy: 'popular'
  }

  // componentDidMount() {
  //   get list of movies from db and update state
  // }

  onMovieSelect = movie => {
    this.setState({ selectedMovie: movie });
  }

  onSortSelect = sort => {
    this.setState({ sortBy: sort }); // add logic to sort movies array
  }

  render () {
    return (
      <BrowserRouter>
        <Header />
        <Route path="/" exact>
          <MainPage
            movies={ this.state.movies }
            selectedMovie={ this.state.selectedMovie }
            sortBy={ this.state.sortBy }
            onMovieSelect={ this.onMovieSelect }
            onSortSelect={ this.onSortSelect }
          />
        </Route>

      </BrowserRouter>
    );
  }
}

export default App;
