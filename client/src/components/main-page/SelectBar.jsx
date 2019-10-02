import React from 'react';

import { Select, SelectOption } from './styled/SelectBarStyle';

export const sortOptions = ['popular', 'bestRated'];

export const SelectBar = props => {
  return (
      <Select>
        <SelectOption
          id="selectPopular"
          className={props.sortBy === sortOptions[0] ? 'active' : null}
          onClick={() => props.onSortSelect(sortOptions[0])}
        >
          most popular
        </SelectOption>

        <SelectOption
          id="selectBestRated"
          className={props.sortBy === sortOptions[1] ? 'active' : null}
          onClick={() => props.onSortSelect(sortOptions[1])}
        >
          highest rated
        </SelectOption>
      </Select>
  );
}