import React from 'react';

import Loader from '../Loader'
import Seat from './Seat';

import shows from '../../api/shows';

class Seats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getShow(this.props.showId)
  }

  getShow = async (id) => {
    const response = await shows.get(`/${id}`);
    const show = response.data;
    this.setState({show: show});
  }

  render() {
    return(
      this.state.show ?
        <Seat />:
        <Loader />
    );
  }
}

export default Seats;