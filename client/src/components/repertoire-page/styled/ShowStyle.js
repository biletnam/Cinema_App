import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const ShowContainer = styled.div`
  align-items: center;
  display: grid;
  grid-template-areas:
    'poster . time'
    'poster title title'
    'poster last ticket';
  grid-template-columns: 1fr 1fr 1fr;
  min-height: 50%;
  justify-items: center;
  border-bottom: 2px solid ${props => props.theme.colors.hover};
  padding: 10px;
  transition: background-color 0.3s;
  &:hover {
    background-color: ${props => props.theme.colors.secondaryTrans};
  }
  &:hover h3 {
    color: ${props => props.theme.colors.ternary};
  }
  &:hover a {
    background-color: ${props => props.theme.colors.main};
    border-radius: 10px;
    color: ${props => props.theme.colors.hover};
    padding: 5px 10px;
  }
`;

export const Time = styled.div`
  grid-area: time;
  transition: color 0.3s;
`;

export const Title = styled.h3`
  grid-area: title;
  padding-left: 5px;
`;

export const Poster = styled.img`
  box-shadow: 0 0 8px 1px rgba(196, 196, 196, 0.2);
  grid-area: poster;
  max-height: 170px;
`;

export const BuyTickets = styled(Link)`
  grid-area: ticket;
  transition: color 0.3s;
`;

export const SoldOut = styled.div`
  background-color: ${props => props.theme.colors.main};
  border-radius: 10px;
  color: ${props => props.theme.colors.secondary};
  grid-area: ticket;
  padding: 5px 7px;
`;

export const LastTicket = styled.div`
  grid-area: last;
  background-color: ${props => props.theme.colors.hover};
  border-radius: 10px;
  color: ${props => props.theme.colors.main};
  padding: 5px 7px;
`;
