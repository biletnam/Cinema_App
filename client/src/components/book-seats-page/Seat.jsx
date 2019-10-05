import React from 'react';
import { SeatContainer, SeatIcon } from './styled/SeatStyle';

const Seat = props => {
  if (props.isAvailable && props.isReserved) {
    return (
      <SeatContainer>
        <SeatIcon className="fas fa-couch available reserved" onClick={()=>props.onSeatChoice(props.number)}/>
        {props.number}
      </SeatContainer>
    );
  } else if (props.isAvailable) {
    return (
      <SeatContainer>
        <SeatIcon className="fas fa-couch available" onClick={()=>props.onSeatChoice(props.number)}/>
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

