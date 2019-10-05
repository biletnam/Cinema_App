import React from 'react';

import { Screen, ShowHeading } from './styled/ShowHeading';

const ShowHeader = props => {
  return (
    <Screen>
      <ShowHeading>
        {props.movie.title} {props.show.hour}.00hrs
      </ShowHeading>
    </Screen>
  );
}

export default ShowHeader;