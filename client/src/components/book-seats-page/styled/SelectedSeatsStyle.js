import styled from 'styled-components';

export const Display = styled.div`
  text-align: center;
  font-size: var(--font-xl);
`;

export const SelectedSeat = styled.div`
  margin: 10px;
`;

export const Prices = styled.div`
  align-items: center;
  border-top: 2px solid;
  border-bottom: 2px solid;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 5px auto;
  max-width: 700px;
  padding: 10px;
`;

export const ProceedBtn = styled.button`
  background-color: green;
  border: none;
  border-radius: 10px;
  color: ${props => props.theme.colors.main};
  margin: 20px auto;
  outline: none;
  padding: 5px 10px;
  transition: color 0.5s;
  &:hover {
    color: ${props => props.theme.colors.secondary};
    cursor: pointer;
  }
`;
