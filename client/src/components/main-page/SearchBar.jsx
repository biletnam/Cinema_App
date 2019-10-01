import React from 'react';

import { Bar, SearchInput, SearchIcon } from './styled/SearchBarStyle';

const SearchBar = props => {
  return (
    <Bar>
      <SearchInput placeholder={props.text} />
      <SearchIcon className="fas fa-search"/>
    </Bar>
  );
}

export default SearchBar;
