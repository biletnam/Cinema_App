import React from 'react';
import { connect } from 'react-redux';

import { getShow } from '../../store/actions';

class ChooseTickets extends React.Component {
  componentDidMount = async () => {
    await this.props.getShow(this.props.showId);
  }

  displayPrices = () => {
    if(this.props.show.prices) {
      return this.props.show.prices.map((price, i) => {
        return (
          <div key={`${i}-${price.price}`}>
            {price.ticketType} - {price.price}
          </div>
        )
      });
    }
  }
  showSeats = () => {
      return this.props.show.seats.filter(seat => seat.isReserved).map((seat, i) => {
        console.log(seat.number)
        return (
        <div key={seat.number}>
          {seat.number}
        </div>
        )
      });
  }

  render() {
    return(
      <>
        <div>{this.props.show.seatsinema && this.showSeats()}</div>
      {/* <div>{this.displayPrices()}</div> */}
      </>
    );
  }
}

const mapStateToProps = state => {
  return { show: state.show }
}

export default connect(mapStateToProps, { getShow })(ChooseTickets);