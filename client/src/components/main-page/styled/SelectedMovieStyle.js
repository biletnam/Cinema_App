import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieContainer = styled.div`
  align-items: center;
  display: flex;
  height: 50%;
  justify-content: center;
  width: 100%;
`;

export const MoviePoster = styled(Link)`
  box-shadow: 0 0 8px 1px rgba(196, 196, 196, 0.2);
  cursor: pointer;
  height: 95%;
  position: relative;
  width: auto;
`;

export const Poster = styled.img`
  height: 100%;
`;

export const ExpandIcon = styled.i`
  color: ${props => props.theme.colors.secondaryTrans};
  font-size: var(--font-xxl);
  position: absolute;
  right: 3px;
  top: 2px;
  z-index: 10;
  &:hover {
    color: ${props => props.theme.colors.hover};
  }
`;
