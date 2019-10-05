import React from 'react';

import { TitleContainer } from './styled/MovieInfoContainer';

const Title = props => {
  return (
    <TitleContainer>
        {`${props.selectedMovie.title}`}
    </TitleContainer>
  );
}

export default Title;