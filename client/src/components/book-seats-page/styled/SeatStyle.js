import styled from 'styled-components';

export const Room = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  margin: 0 auto;
  max-width: 700px;
  overflow: scroll;
  width: 90%;
`;

export const SeatContainer = styled.div`
  align-items: center;
  background-color: rgba(196, 196, 196, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1px;
  &:hover {
    background-color: rgba(196, 196, 196, 0.1);
  }
`;

export const SeatIcon = styled.i`
  color: ${props => props.theme.colors.secondary};
  font-size: var(--font-xl);
  padding: 5px;
  &.available {
    color: green;
  }
  &.available:hover {
    cursor: pointer;
  }
  &.available.reserved {
    color: ${props => props.theme.colors.ternary};
  }
`;
