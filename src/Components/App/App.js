import React from 'react'
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import '/App.css'

/*I'm not quite sure what it means by hardcoding 
"an array of objects, each containing name, artist, album, and id properties."
*/

const results = {
	name: 'These Coding Days',
	artist: 'Jack Henry',
	album:	'Learning the Ropes',
	id:	1
	};
	
const playList = {
	name: 'TEST',
	artist: 'Jack Henry',
	album:	'Testing the Ropes',
	id:	2	
}

class App extends React.Component {
	constructor(props) {
    super(props);

    this.state = {
		searchResults: results,
		playlistName: 'Jacks Awesome Playlist',
		playlistTracks:	playList
    }
    
  this.addTrack = this.addTrack.bind(this);
  this.removeTrack = this.removeTrack.bind(this);
  this.updatePlaylistName = this.updatePlaylistName.bind(this);
  this.savePlaylist = this.savePlaylist.bind(this);
  this.savePlaylist = this.search.bind(this);
	}
  
  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
  }

  removeTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === trackid)){
      //Not sure what to put here
    }
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name})
  }

  savePlaylist = () => {
    //No idea what I am doing here
  } 

  search(term) {
    console.log(term)
  }

  render() {
    return (
    <div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App">
      <SearchBar onSearch={this.search}/>
      <div className="App-playlist">
        <SearchResults SearchResults={this.state.searchResults} onAdd={this.addTrack} />
        <playList playlistName={this.state.playlistName} playlistTacks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlayListName} onClick={this.props.onSave}/>
      </div>
    </div>
  </div>
    );
  }; 
};

export default App;


