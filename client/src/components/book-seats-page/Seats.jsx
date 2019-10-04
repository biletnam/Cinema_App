import React from 'react';

import Loader from '../Loader'
import Seat from './Seat';
import { Room } from './styled/SeatStyle';

import shows from '../../api/shows';

class Seats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // TODO: Add header with title, date & hour
  // TODO: add graphic reference for screen in the room
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
  }

  render() {
    return(
      this.state.show ?
        <Room>
          {this.state.show.seatsAvailable.map(seat => <Seat
            key={seat.number}
            number={seat.number}
            isAvailable={seat.isAvailable}
          />)}
        </Room>:
        <Loader />
    );
  }
}

export default Seats;