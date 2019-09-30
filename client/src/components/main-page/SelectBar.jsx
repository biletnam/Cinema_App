import React from 'react';
import styled from 'styled-components';

const Select = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const SelectOption = styled.div`
  align-items: center;
  background: linear-gradient(90deg, rgba(196, 196, 196, 0) 0%, #C4C4C4 4.67%, #C4C4C4 43.3%, rgba(196, 196, 196, 0) 97.81%);
  color: ${props => props.theme.colors.main};
  display: flex;
  font-size: var(--font-xs);
  height: 30px;
  padding: 0 30px
  margin: 0;
  transition: color .5s;
  width: 50%;
  :hover {
    color: ${props=>props.theme.colors.ternary};
    cursor: pointer;
  }
  &.active {
    color: ${props => props.theme.colors.ternary}
  }
`;

const SelectBar = props => {
  return (
      <Select>
        <SelectOption
          id="selectPopular"
          className={props.active === 'popular' ? 'active' : null}
          onClick={() => {
            props.onSortSelect('popular');
          }}
        >
          most popular
        </SelectOption>
        
        <SelectOption
          id="selectBestRated"
          className={props.active === 'bestRated' ? 'active' : null}
          onClick={() => props.onSortSelect('bestRated')}
        >
          highest rated
        </SelectOption>
      </Select>
  );
}

export default SelectBar;
