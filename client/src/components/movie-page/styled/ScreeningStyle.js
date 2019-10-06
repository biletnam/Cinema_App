import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ShowDetails = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid ${props => props.theme.colors.secondary};
`;

export const Time = styled.div`
  font-size: var(--font-l);
  padding: 10px;
`;

export const Tickets = styled(Link)`
  max-width: 150px;
  text-align: center;
  transition: color 0.5s;
  &:hover {
    color: ${props => props.theme.colors.hover};
    cursor: pointer;
  }
`;
