import React from 'react';

import Seats from './book-seats-page/Seats';

const BookSeatsPage = ({ match }) => {
  return (
    <Seats showId={match.params.id} />
  );
}

export default BookSeatsPage;