import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import SearchBar from './SearchBar';
import SelectBar from './SelectBar';
import Slider from './slider/Slider';
import SelectedMovie from './SelectedMovie';

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
    selectedMovie: Image1
  }

  // componentDidMount() {
  //   get list of movies from db and update state
  // }

  onMovieSelect = movie => {
    this.setState({ selectedMovie: movie });
  }

  selectSorting = () => {
    console.log('klik')
  }

  render () {
    return (
      <BrowserRouter>
        <Header />
        <SearchBar
          text="find movie"
        />
        <SelectBar
        />
        <Slider
          images={ this.state.movies }
          onMovieSelect={ this.onMovieSelect}
        />
        <SelectedMovie
          image={ this.state.selectedMovie }
        />
      </BrowserRouter>
    );
  }
}

export default App;
