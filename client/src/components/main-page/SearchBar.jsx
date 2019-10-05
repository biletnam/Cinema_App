import React from 'react';

import { connect } from 'react-redux';
import { selectMovie } from '../../store/actions';

import { Bar, SearchInput, SearchIcon } from './styled/SearchBarStyle';

class SearchBar extends React.Component{
  state = {term: ''}

  keyPressed = (event) => {
    if (event.key === "Enter") {
      this.searchAndUpdate()
    }
  }

  async searchAndUpdate(){
    let regexp = new RegExp(`.*${this.state.term}.*`, 'i');
    let matches = this.props.movies.filter((task) => task.title.match(regexp));

    if (matches.length>0){
      this.props.selectMovie(matches[0]);
    }
  }

  render(){
    return (
      <Bar>
        <SearchInput
          type="text"
          onChange={(e)=>this.setState({term : e.target.value})}
          onKeyPress={this.keyPressed}
          value={this.state.term}
          placeholder={this.props.text}
        />
        <SearchIcon className="fas fa-search" onClick={()=>this.searchAndUpdate()}/>
      </Bar>
    )
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
mapStateToProps,
{ selectMovie }
)(SearchBar);