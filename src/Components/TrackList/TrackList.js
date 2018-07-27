import React from 'react';
import './TrackList.css';

import SearchResults from '../SearchResults/SearchResults'

class TrackList extends React.Component {
	Track = []
  render() {
    return (
      <div className="TrackList">
        {
          this.props.tracks.map(tracks => {
            return <Track track={track} key={track.id} />
          })
        }
      </div>
    );
  };
};

export default Tracklist