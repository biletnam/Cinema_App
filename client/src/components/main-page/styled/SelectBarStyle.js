import styled from 'styled-components';

export const Select = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const SelectOption = styled.div`
  align-items: center;
  background: linear-gradient(
    90deg,
    rgba(196, 196, 196, 0) 0%,
    #c4c4c4 4.67%,
    #c4c4c4 43.3%,
    rgba(196, 196, 196, 0) 97.81%
  );
  background: var(--bg-bar);

  color: ${props => props.theme.colors.main};
  display: flex;
  font-size: var(--font-xs);
  height: 30px;
  padding: 0 30px;
  margin: 0;
  transition: color 0.5s;
  width: 50%;
  :hover {
    color: ${props => props.theme.colors.ternary};
    cursor: pointer;
  }
  &.active {
    color: ${props => props.theme.colors.ternary};
  }
`;
