import styled from 'styled-components';

export const Bar = styled.div`
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
  justify-content: space-between;
  padding: 0 30px;
`;

export const SearchInput = styled.input`
  background: transparent;
  border: none;
  color: ${props => props.theme.colors.main};
  cursor: text;
  font: inherit;
  outline: none;
  width: 100%;
  &::placeholder {
    color: ${props => props.theme.colors.main};
  }
`;

export const SearchIcon = styled.i`
  color: ${props => props.theme.colors.secondary};
`;
