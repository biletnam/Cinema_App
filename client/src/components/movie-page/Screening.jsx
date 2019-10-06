import React from 'react';

import { ShowDetails, Time, Tickets } from './styled/ScreeningStyle';

const weekdays = ['monday', 'tueasday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

const Screening = props => {
  const showPath = `/book-seats/${props.show._id}`;
  return (
    <ShowDetails>
      <Time>
        {weekdays[props.show.day]}
      </Time>
      <Time>
        {props.show.hour}.00hrs
      </Time>
      <Tickets to={showPath}>
        buy tickets
      </Tickets>
    </ShowDetails>
  );
}

export default Screening;