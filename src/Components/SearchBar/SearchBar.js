import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props){
    super(props);

    this.state = { term: '' };

    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
	this.handleEnterKey = this.handleEnterKey.bind(this);
  }

   search() {
    if (!this.state.term) {
      return; 
    }
    this.props.onSearch(this.state.term);
  }

  handleTermChange(event) {
    this.setState({term: event.target.value});
  }

    // this gives the option to search by hitting the "enter" key instead of hitting the "search" button
  handleEnterKey(event) {
    if(event.key === 'Enter') {
      return this.props.onSearch(this.state.term)
    }
    return;
  }
  
  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} onKeyPress={this.handleEnterKey}/>
        <a onClick={this.search}>SEARCH</a>
      </div>
    )
  }
}

export default SearchBar;