import React from 'react';

import { LoaderContainer, Spinner } from './styled/LoaderStyle';

const Loader = () => {
  return (
    <LoaderContainer>
      LOADING
      <Spinner />
    </LoaderContainer>
  );
}

export default Loader;