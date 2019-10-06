import React from 'react';

import { OverviewContainer } from './styled/MovieInfoContainer';

const Overview = props => {
  return (
    <OverviewContainer>
      {props.selectedMovie.overview}
    </OverviewContainer>
  );
}

export default Overview;