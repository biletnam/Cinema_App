import React from 'react';

import RepertoirePageContainer from './styled/RepertoirePageStyle';
import Header from './repertoire-page/styled/RepertoireHeader';
import Loader from './Loader';
import Show from './repertoire-page/Show';

import shows from '../api/shows';
import movies from '../api/movies';

class RepertoirePage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      day: null,
      movies: [],
      shows: []
    }
  }

  componentDidMount = async () => {
    await this.getMovieList();
    await this.checkDate();
    await this.getShowList();
  }

  getShowList = async () => {
    const response = await shows.get('/');
    const showList = response.data.filter(show => show.day >= this.state.day);
    this.setState({shows: showList});
  }

  getMovieList = async () => {
    const response = await movies.get('/');
    this.setState({movies: response.data});
  }

  checkDate() {
    const day = new Date().getDay();
    // getDay returns value for given weekday counting from sunday, show property day starts counting from monday
    day === 0 ?
      this.setState({day: 6}):
      this.setState({day: day - 1});
  }

  render() {
    return (
      <RepertoirePageContainer>
        <Header>On screen this week</Header>
        {this.state.shows.length > 0 ?
          this.state.shows.map(show => <Show
            show={ show }
            key={ show._id }
            movie={ this.state.movies.find(movie => movie._id === show.movie)}
          />):
          <Loader />
        }
      </RepertoirePageContainer>
    );
  }
}

export default RepertoirePage;