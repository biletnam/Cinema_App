import React from 'react';
import { connect } from 'react-redux';

import RepertoirePageContainer from './styled/RepertoirePageStyle';
import Header from './repertoire-page/styled/RepertoireHeader';
import Loader from './Loader';
import Show from './repertoire-page/Show';

import { getShows } from '../store/actions';

class RepertoirePage extends React.Component {

  componentDidMount = () => {
    this.props.getShows();
  }

  renderShows() {
    return this.props.shows.map(show => <Show
      show={ show }
      key={ show._id }
      movie={ this.props.movies.find(movie => movie._id === show.movie)}
    />)
  }

  render() {
    return (
      <>
        <Header>On screen this week</Header>
        <RepertoirePageContainer>
          {this.props.shows.length > 0 ?
            this.renderShows():
            <Loader />
          }
        </RepertoirePageContainer>
      </>
    );
  }
}

const mapStateToProps = state => {
  return { shows: state.shows }
}

export default connect(mapStateToProps, { getShows })(RepertoirePage);