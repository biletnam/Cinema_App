import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Select = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const SelectOption = styled(Link)`
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

// Not sure if we really need to use Browser Router here (now i think we don't so I would change SelectOption to be regular div and not an Link element)
const SelectBar = props => {
  return (
      <Select>
        <SelectOption
          id="selectPopular"
          to="/most-popular"
          className={props.active === 'popular' ? 'active' : null}
          onClick={() => {
            props.onSortSelect('popular');

          }}
        >
          most popular
        </SelectOption>
        <SelectOption
          id="selectBestRated"
          to="/best-rated"
          className={props.active === 'bestRated' ? 'active' : null}
          onClick={() => props.onSortSelect('bestRated')}
        >
          highest rated
        </SelectOption>
      </Select>
  );
}

export default SelectBar;
