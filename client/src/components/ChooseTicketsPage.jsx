import React from 'react';

import ChooseTickets from './choose-tickets-page/ChooseTickets';

const ChooseTicketsPage = ({ match }) => {
  return (
    <ChooseTickets showId={match.params.id} />
  );
}


export default ChooseTicketsPage;