import React from 'react';

import Loader from '../Loader'
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
        <div>Seats {this.state.show.hour}</div>:
        <Loader />
    );
  }
}

export default Seats;