import React from 'react';

import RepertoirePageContainer from './styled/RepertoirePageStyle';
import Loader from './Loader';

const weekdays = ['monday', 'tueasday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

class RepertoirePage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      day: null,
      date: null,
      shows: []
    }
  }

  componentDidMount() {
    this.checkDate();
  }

  checkDate() {
    const date = new Date();
    const today = date.getDay();
    // get day returns value for given weekday counting from sunday, show property day starts counting from monday
    today === 0 ?
      this.setState({day: 6}):
      this.setState({day: today - 1});
  }
  render() {
    return (
      <RepertoirePageContainer>
        {this.state.shows.length > 0 ?
          <div> RepertoirePage and today is {weekdays[this.state.day]}</div> :
          <Loader />
        }
      </RepertoirePageContainer>
    );
  }
}

export default RepertoirePage;