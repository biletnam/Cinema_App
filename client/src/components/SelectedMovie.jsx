import React from 'react';
import styled from 'styled-components';

const MovieContainer = styled.div`
  align-items: center;
  background: linear-gradient(180deg, rgba(196, 196, 196, 0) 0%, rgba(196, 196, 196, 0.2) 100%);
  display: flex;
  height: 50%;
  justify-content: center;
  width: 100%;
`;

const MoviePoster = styled.div`
  box-shadow: 0 0 8px 1px rgba(196, 196, 196, 0.2);
  cursor: pointer;
  height: 90%;
  position: relative;
  width: auto;
`;

const Poster = styled.img`
  height: 100%;
  width: auto;
`;

const ExpandIcon = styled.i`
  color: ${props => props.theme.colors.secondaryTrans};
  font-size: var(--font-xxl);
  position: absolute;
  right: 3px;
  top: 2px;
  z-index: 10;
  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

const SelectedMovie = props => {
  return (
    <MovieContainer>
      <MoviePoster >
        <Poster src={ props.image } alt="Movie Poster"/>
        <ExpandIcon className="fas fa-expand-arrows-alt" />
      </MoviePoster>
    </MovieContainer>
  );
}

export default SelectedMovie;