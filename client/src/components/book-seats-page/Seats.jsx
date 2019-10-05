import React from 'react';
import { connect } from 'react-redux';

import Loader from '../Loader'
import Seat from './Seat';
import { Room } from './styled/SeatStyle';
import ShowHeader from './ShowHeader';
import SelectedSeats from './SelectedSeats';

import { getShow, getMovie, reserveSeat } from '../../store/actions';

class Seats extends React.Component {

  componentDidMount = async () => {
    await this.props.getShow(this.props.showId);
    await this.props.getMovie(this.props.show.movie);
  }

  onSeatChoice = seatNo => {
    this.props.reserveSeat(seatNo);
  }

  renderSeats() {
    return this.props.show.seats.map(seat => <Seat
      show={this.props.show}
      key={seat.number}
      number={seat.number}
      isAvailable={seat.isAvailable}
      isReserved={seat.isReserved}
      onSeatChoice={this.onSeatChoice}
    />);
  }

  render() {
    return(
      this.props.movie ?
        <>
          <ShowHeader
            movie={ this.props.movie }
            show={ this.props.show}
          />
          <Room>
            { this.renderSeats() }
          </Room>
          <SelectedSeats
            seats={ this.props.show.seats }
            prices={ this.props.show.prices }
          />
        </>:
        <Loader />
    );
  }
}

const mapStateToProps = state => {
  return { show: state.show, movie: state.movie }
}

export default connect(mapStateToProps, { getShow, getMovie, reserveSeat })(Seats);