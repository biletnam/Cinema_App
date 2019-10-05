import React from 'react';

import { OverviewContainer } from './styled/MovieInfoContainer';

const Overview = props => {
  return (
    <OverviewContainer>
        Overview: {`${props.selectedMovie.overview}`}
    </OverviewContainer>
  );
}

export default Overview;