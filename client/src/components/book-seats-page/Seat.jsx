import React from 'react';
import { SeatContainer, SeatIcon } from './styled/SeatStyle';

const Seat = props => {
  if (props.isAvailable) {
    return (
    <SeatContainer>
      <SeatIcon className="fas fa-couch available" />
      {props.number}
    </SeatContainer>
    );
  } else {
    return (
      <SeatContainer>
        <SeatIcon className="fas fa-couch" />
        {props.number}
      </SeatContainer>
      );
  }
}

export default Seat;

