import React from 'react';

import Loader from '../Loader'
import Seat from './Seat';
import { Room } from './styled/SeatStyle';
import ShowHeader from './ShowHeader';

import shows from '../../api/shows';
import movies from '../../api/movies';


class Seats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show : {
        seatsAvailable: {
          isReserved: false
        }
      }
    };
    this.reserveSeat = this.reserveSeat.bind(this);
    this.renderSeats = this.renderSeats.bind(this);
  }
  // TODO: add display to show selected seats
  // TODO: add display with prices
  // TODO: add logic to handle clicks on seats
  // TODO: add logic to confirm choice and redirect to choosing tickets page

  componentDidMount() {
    this.getShow(this.props.showId)
  }

  getShow = async (id) => {
    const response = await shows.get(`/${id}`);
    const show = response.data;
    this.setState({show: show});
    this.getMovie(show.movie);
  }

  getMovie = async (id) => {
    const response = await movies.get(`/${id}`);
    const movie = response.data;
    this.setState({movie: movie});
  }

  renderSeats() {
    return this.state.show.seatsAvailable.map(seat => <Seat
      key={seat.number}
      number={seat.number}
      isAvailable={seat.isAvailable}
      isReserved={seat.isReserved}
      onSeatChoice={this.reserveSeat}
    />);
  }

  reserveSeat(seatNo) {
    const newStateShow = this.state.show;
    newStateShow.seatsAvailable = this.state.show.seatsAvailable.map(seat => {
      if (seat.number === seatNo) {
        seat.isReserved = !seat.isReserved;
        return seat;
      } else {
        return seat;
      }
    });
    this.setState({ show: newStateShow });
  }

  render() {
    return(
      this.state.movie ?
        <>
          <ShowHeader
            movie={ this.state.movie }
            show={ this.state.show}
          />
          <Room>
            { this.renderSeats() }
          </Room>
        </>:
        <Loader />
    );
  }
}

export default Seats;