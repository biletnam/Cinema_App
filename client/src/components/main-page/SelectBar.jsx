import React from 'react';

import { Select, SelectOption } from './styled/SelectBarStyle';

export const sortOptions = ['popular', 'bestRated'];

export const SelectBar = props => {
  return (
      <Select>
        <SelectOption
          className="active"
          onClick={ event => {
            toggleActiveClass(event.target, event.target.nextElementSibling)
            props.onSortSelect(sortOptions[0]);
          }}
        >
          most popular
        </SelectOption>

        <SelectOption
          onClick={event => {
            toggleActiveClass(event.target, event.target.previousElementSibling)
            props.onSortSelect(sortOptions[1]);
          }}
        >
          highest rated
        </SelectOption>
      </Select>
  );
}

const toggleActiveClass = (target, sibling) => {
  if(!target.classList.contains('active')) {
    target.classList.add('active');
    sibling.classList.remove('active');
  }
}