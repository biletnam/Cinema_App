import React from 'react';
import styled from 'styled-components';

const Select = styled.div`
  align-items: center;
  background: linear-gradient(90deg, rgba(196, 196, 196, 0) 0%, #C4C4C4 4.67%, #C4C4C4 43.3%, rgba(196, 196, 196, 0) 97.81%);
  color: ${props => props.theme.colors.main};
  display: flex;
  font-size: var(--font-xs);
  height: 30px;
  justify-content: space-between;
  margin-top: 25px;
  padding: 0 30px
  :hover > * {
    color: ${props=>props.theme.colors.main};
  }
`;

const SelectOption = styled.p`
  margin: 0;
  transition: color .5s;
  width: 50%;
  :hover {
    color: ${props=>props.theme.colors.hover};
    cursor: pointer;
  }
  &.active {
    color: ${props=>props.theme.colors.ternary};
  }
`;


const SelectBar = props => {
  return (
      <Select>
        <SelectOption className="active">most popular</SelectOption>
        <SelectOption>highest rated</SelectOption>
      </Select>
  );
}

export default SelectBar;
