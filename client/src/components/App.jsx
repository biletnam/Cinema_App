import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import MainPage from './MainPage';

import movies from '../api/movies';

class App extends React.Component {
  state = {
    movies: [],
    selectedMovie: null,
    sortBy: 'popular'
  }

  componentDidMount() {
    this.getMovieList();
  }

  getMovieList = async () => {
    const response = await movies.get('/');
    const sortedList = this.sortMovieList(response.data);
    this.setState({movies: sortedList, selectedMovie: sortedList[0]});
  }

  sortMovieList = (list) => list; // TODO

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
            movieList={ this.state.movies }
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
