import React from 'react';

import Reservation from './reservation-page/Reservation';

const ReservationPage = ({ match, location }) => {

  const showId = match.params.id;
  const tickets = [];
  for(let ticket of new URLSearchParams(location.search).entries()){
    tickets.push({ number: ticket[0], ticketType: ticket[1]});
  }

  return <Reservation tickets={tickets} />;
}

export default ReservationPage;

