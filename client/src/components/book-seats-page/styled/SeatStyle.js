import styled from 'styled-components';

export const Room = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  max-width: 90%;
  margin: 0 auto;
`;

export const SeatContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SeatIcon = styled.i`
  color: ${props => props.theme.colors.secondary};
  font-size: var(--font-xl);
  padding: 5px;
  &.available {
    color: green;
  }
  &.available:hover {
    color: ${props => props.theme.colors.hover};
    cursor: pointer;
  }
`;
