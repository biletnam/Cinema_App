import React from 'react';
import { connect } from 'react-redux';

import { getShows } from '../../store/actions';

import { Container, Heading, Shows } from './styled/ScreeningsStyle';
import Screening from './Screening';

class Screenings extends React.Component {
  componentDidMount = () => {
    this.props.getShows();
  }

  renderShows() {
    return this.props.shows.filter(show => show.movie === this.props.movie._id)
      .map(show => <Screening
        show={ show }
        key={ show._id }
    />)
  }

  render() {
    return (
      <Container>

        <Heading>
          upcoming screenings
        </Heading>

        <Shows>
          {this.renderShows()}
        </Shows>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return { shows: state.shows }
}

export default connect(mapStateToProps, { getShows })(Screenings);