import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { getMovies, sortMovies, selectMovie } from '../store/actions';

import { sortOptions } from './main-page/SelectBar';

import Header from './Header';
import MainPage from './MainPage';
import MoviePage from './MoviePage'
import RepertoirePage from './RepertoirePage';
import BookSeatsPage from './BookSeatsPage';
import ChooseTicketsPage from './ChooseTicketsPage';
import ReservationPage from './ReservationPage';

class App extends React.Component {

  componentDidMount = async () => {
    await this.props.getMovies();
    this.props.sortMovies(sortOptions[0]);
    this.props.selectMovie(this.props.movies[0]);
  }

  onMovieSelect = movie => this.props.selectMovie(movie);

  onSortSelect = sortOption => this.props.sortMovies(sortOption);


  render () {
    return (
      <BrowserRouter>
        <Header />

        <Route path="/" exact>
          <MainPage
            movies={ this.props.movies }
            selectedMovie={ this.props.selectedMovie }
            onMovieSelect={ this.onMovieSelect }
            onSortSelect={ this.onSortSelect }
          />
        </Route>

        <Route path="/movie-info">
          <MoviePage
            selectedMovie={ this.props.selectedMovie }
          />
        </Route>

        <Route path="/repertoire">
          <RepertoirePage
            movies={ this.props.movies }
          />
        </Route>

        <Route path="/book-seats/:id" component={ BookSeatsPage } />

        <Route path="/choose-tickets/:id" component={ ChooseTicketsPage } />

        <Route path="/reservation/:id" component={ ReservationPage } />

      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return { movies: state.movies, selectedMovie: state.selectedMovie }
}

export default connect(mapStateToProps, { getMovies, sortMovies, selectMovie })(App);