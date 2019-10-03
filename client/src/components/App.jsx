import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import MainPage from './MainPage';
import ReportoirePage from './RepertoirePage';

import movies from '../api/movies';
import shows from '../api/shows';

import { sortOptions } from './main-page/SelectBar';

class App extends React.Component {
  state = {
    movies: [],
    shows: [],
    selectedMovie: null,
    sortBy: sortOptions[0]
  }

  componentDidMount() {
    this.getMovieList();
    this.getShowList();
  }

  getMovieList = async () => {
    const response = await movies.get('/');
    const sortedList = this.sortMovieList(response.data, this.state.sortBy);
    this.setState({movies: sortedList, selectedMovie: sortedList[0]});
  }

  getShowList = async () => {
    const response = await shows.get('/');
    this.setState({shows: response.data});
  }

  sortMovieList = (list, sortOption) => {
    switch (sortOption) {
      case sortOptions[0]:
        return [...list].sort((a, b) => b.popularity - a.popularity);
      case sortOptions[1]:
        return [...list].sort((a, b) => b.vote_average - a.vote_average);
      default:
        return list;
    }
  }

  onMovieSelect = movie => {
    this.setState({ selectedMovie: movie });
  }

  onSortSelect = sortOption => {
    ;
    this.setState({
      sortBy: sortOption,
      movies: this.sortMovieList(this.state.movies, sortOption)
    });
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
        <Route path="/repertoire">
          <ReportoirePage
            showList={ this.state.shows }
          />
        </Route>

      </BrowserRouter>
    );
  }
}

export default App;
