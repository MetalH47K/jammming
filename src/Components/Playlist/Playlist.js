//This document renders user Playlist and passes information to TrackList

import React from 'react';
import './PlayList.css';
import TrackList from '../Tracklist/TrackList';

class PlayList extends React.Component {
  constructor(props){
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event){
    this.props.onNameChange(event.target.value);
  }

  render() {
    return(
      <div className="Playlist">
        <input defaultValue={'New Playlist'} onChange={this.handleNameChange}/>
        <TrackList tracks={this.props.playListTracks}
                   onRemove={this.props.onRemove}
                   isRemoval={true}/>
                 <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
      </div>
    )
  }
}

export default PlayList;