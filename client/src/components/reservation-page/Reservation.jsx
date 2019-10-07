import React from 'react';
import { connect } from 'react-redux';
import Loader from '../Loader'
import { Heading } from '../choose-tickets-page/styled/Heading';
import {Confirm, Date  , Title , Table , TableRow, TableColumn , SummaryTicketsContainer , Wrapper ,Heading as HeadingH , TitleH} from './styled/reservationStyle';
import { getShow , getMovie} from '../../store/actions';

class Reservation extends React.Component {

   weekdays = ['Monday', 'Tueasday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
   reservationPath =  `/reservationConfirm/${this.props.showId}`;

  componentDidMount = async () => {
    await this.props.getShow(this.props.showId);
    await this.props.getMovie(this.props.show.movie);
    console.log(this.props.show.prices);

  }
  updateState() {
    
  }
  render() {
    return(
      this.props.movie ?
      <>
      <SummaryTicketsContainer>
        <Heading>
     
          <Title>{this.props.movie.title}</Title>
          <Date>{this.weekdays[this.props.show.day]} {this.props.show.hour}.00hrs</Date>
     
          <Wrapper>
            <Table>
              <tbody>
              <TableRow>
                  <TableColumn>Ticket Type</TableColumn>
                  <TableColumn>Seats</TableColumn>
                  <TableColumn>Price</TableColumn>
              </TableRow>
              <TableRow></TableRow>
              {this.props.tickets.map(v => {
                return <TableRow key={v.number}>
                  <TableColumn>{v.ticketType}</TableColumn>
                  <TableColumn>{v.number}</TableColumn>
                  <TableColumn>{this.props.show.prices.map(ticket => {
                    if(ticket.ticketType === v.ticketType) {
                      return ticket.price
                    }
                  })}</TableColumn>
                </TableRow>
              })}
              </tbody>
            </Table>
          </Wrapper>
          <Confirm onClick={this.updateState} to={this.reservationPath}>Confirm</Confirm>
        </Heading>
      </SummaryTicketsContainer>
    
      </>:
      <Loader />
    );
}

  
}
const mapStateToProps = state => {
  return { show: state.show, movie: state.movie }
}

export default connect(mapStateToProps, { getShow, getMovie})(Reservation);
