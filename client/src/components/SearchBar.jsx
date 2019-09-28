import React from 'react';
import styled from 'styled-components';

import Bar from './Bar';

const SearchInput = styled.input`
  background: transparent;
  border: none;
  color: ${props=>props.theme.colors.main}
  cursor: text;
  font: inherit;
  outline: none;
  &::placeholder {
    color: ${props=>props.theme.colors.main}
  }
`;

const SearchIcon = styled.i`
  color: ${props => props.theme.colors.secondary };
`;


const SearchBar = props => {
  return (
    <Bar>
      <SearchInput placeholder={props.text} />
      <SearchIcon className="fas fa-search"/>
    </Bar>
  );
}

export default SearchBar;
