import React from 'react';

import { Display, SelectedSeat, Prices, ProceedBtn } from './styled/SelectedSeatsStyle';

const SelectedSeats = props => {
  const seats = []
  props.seats.forEach(seat => seat.isReserved ? seats.push(seat) : seat);

  const displaySelectedSeats = () => {
    return seats.map(seat => {
      return (<SelectedSeat key={seat.number}>
        {seat.number}
      </ SelectedSeat>
      )}
    );
  }

  const displayPrices = () => {
    return props.prices.map((price, i) => {
      return (
        <div key={`${i}-${price.price}`}>
          {price.ticketType} - {price.price}
        </div>
      )
    });
  }

  return(
    <Display>

      <div>
        selected seats:
        {displaySelectedSeats()}
      </div>
      <div>price list:</div>
      <Prices>
        {displayPrices()}
      </Prices>

      { seats.length > 0 &&
        <ProceedBtn>
        confirm selection and proceed
        </ProceedBtn>
      }
    </Display>
  );

}

export default SelectedSeats;