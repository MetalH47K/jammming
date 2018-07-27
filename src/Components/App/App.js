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
	}
	
  render() {
    return (
    <div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App">
      <SearchBar />
      <div className="App-playlist">
        <SearchResults SearchResults={this.state.searchResults} />
        <playList playlistName={this.state.playlistName} playlistTacks={this.state.playlistTracks} />
      </div>
    </div>
  </div>
    );
  }; 
};

export default App;


