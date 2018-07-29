import React from 'react';
import './TrackList.css';

import SearchResults from '../SearchResults/SearchResults'

class TrackList extends React.Component {
  Track = []
  
  removeTrack = () => {
    this.props.track = this.props.onRemove
  } 

  render() {
    return (
      <div className="TrackList">
        {
          this.props.tracks.map(tracks => {
            return <Track track={track} key={track.id} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval} />
          })
        }
      </div>
    );
  };
};

export default Tracklist