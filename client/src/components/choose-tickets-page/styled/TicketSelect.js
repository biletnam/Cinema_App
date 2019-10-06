import styled from 'styled-components';

export const Form = styled.form`
  align-items: center;
  margin: 5px auto;
  background: var(--bg-bar);
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${props => props.theme.colors.main};
`;

export const TicketSelect = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const PriceRadio = styled.div`
  margin: 10px;
`;

export const CheckoutBtn = styled.button`
  background-color: ${props => props.theme.colors.ternary};
  border: none;
  border-radius: 10px;
  color: ${props => props.theme.colors.hover};
  font: inherit;
  font-size: var(--font-xl);
  padding: 20px;
  margin: 20px auto;
  max-width: 200px;
  outline: none;
  text-align: center;
  transition: color 0.5s, background-color 0.5s;
  &:hover {
    background-color: ${props => props.theme.colors.hover};
    color: ${props => props.theme.colors.main};
    cursor: pointer;
  }
`;
