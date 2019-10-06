import React from 'react';
import { connect } from 'react-redux';

import TicketsContainer from './styled/TicketsContainer';
import { Heading, Title, Hour, SubTitle } from './styled/Heading';
import { Form, TicketSelect, PriceRadio, CheckoutBtn } from './styled/TicketSelect';

class ChooseTickets extends React.Component {

  displayPrices = seatNumber => {
    if(this.props.show.prices) {
      return this.props.show.prices.map((price, i) => {
        return (
          <PriceRadio key={`${i}-${price.price}`}>
            <input type="radio" id={price.ticketType} name={seatNumber} value={price.ticketType} required/>
            <label htmlFor={price.ticketType}> {price.ticketType} - {price.price}</label>
          </PriceRadio>
        )
      });
    }
  }
  renderSeats = () => {
      return this.props.show.seats.filter(seat => seat.isReserved).map((seat, i) => {
        return (
          <TicketSelect key={seat.number}>
            <div>seat no. {seat.number}</div>
            {this.displayPrices(seat.number)}
          </TicketSelect>
        )
      });
  }

  render() {
    const reservationPath = `/reservation-page/${this.props.show._id}/`;

    return(
      <TicketsContainer>

        <Heading>
          <Title>{this.props.movie.title}</Title>
          <Hour>{this.props.show.hour}.00hrs</Hour>
          <SubTitle>Choose ticket type for your seats:</SubTitle>
        </Heading>

        <Form action={reservationPath}>
          {this.renderSeats()}
          <CheckoutBtn type="submit">
            proceed to checkout
          </CheckoutBtn>
        </Form>

      </TicketsContainer>
    );
  }
}

const mapStateToProps = state => {
  return { show: state.show, movie: state.movie }
}

export default connect(mapStateToProps)(ChooseTickets);