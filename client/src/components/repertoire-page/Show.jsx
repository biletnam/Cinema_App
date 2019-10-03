import React from 'react';

import { ShowContainer, Time, Title, Poster, BuyTickets, SoldOut, LastTicket } from './styled/ShowStyle.js'

const weekdays = ['monday', 'tueasday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
const base_url = 'https://image.tmdb.org/t/p/w500';
const Show = props => {
  return (
    <ShowContainer>

      <Time>
        <span>{weekdays[props.show.day]}</span> <span>{props.show.hour}.00hr</span>
      </Time>

      <Poster src={`${base_url}${props.movie.poster_path}`}/>

      <Title>{props.movie.title}</Title>

      { props.show.seatsAvailable < 5 &&  props.show.seatsAvailable > 0 && <LastTicket>
        Only few tickets left!
      </LastTicket>}

      {props.show.seatsAvailable.length > 0 ?
        <BuyTickets to="/movie-info/"> {/*link to movie page here or directly to buy ticket page*/}
          Buy your ticket now!
        </BuyTickets> :
        <SoldOut>
          Sold out..
        </SoldOut>}

    </ShowContainer>
    );
  }

export default Show;
