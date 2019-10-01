import React from 'react';

import { Select, SelectOption } from './styled/SelectBarStyle';

const SelectBar = props => {
  return (
      <Select>
        <SelectOption
          id="selectPopular"
          className={props.sortBy === 'popular' ? 'active' : null}
          onClick={() => {
            props.onSortSelect('popular');
          }}
        >
          most popular
        </SelectOption>

        <SelectOption
          id="selectBestRated"
          className={props.sortBy === 'bestRated' ? 'active' : null}
          onClick={() => props.onSortSelect('bestRated')}
        >
          highest rated
        </SelectOption>
      </Select>
  );
}

export default SelectBar;
