//This document renders user Playlist and passes information to TrackList

import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList'

export class Playlist extends React.Component {
  constructor(props) {
    super(props);

    this.handleNameChange = bind.handleNameChange(this);
  }



  handleNameChange(event) {
    this.props.onNameChange(event)
  }


  render() {
    return (
      <div className="Playlist">
      <input defaultValue="New Playlist" onChange={this.handleNameChange} />
      <tracklist tracks={this.props.playlistTracks} /> 
      <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    );
  };
};