import React from 'react';
import './Track.css'

export class Track extends React.Component {
	constructor(props) {
		super(props);

		this.state = null

	 this.addTrack = bind.this.addTrack(this);
	 this.removeTrack = bind.this.removeTrack(this);
	}




	renderAction = () => {
		if (this.props.isRemoval === true) {
			return <a>-</a>
		} 	else {
			return <a>+</a>
		}
	}

	addTrack = () => {
		this.props.track = this.props.onAdd
	}

    render() {
		return (
			<div className="Track">
			<div className="Track-information">
			<h3>{this.props.track.name}</h3>
			<p>{this.props.track.artist} | {this.props.track.album}</p>
			</div>
  <a class="Track-action" onClick={this.addTrack}>+ or -</a>
	</div>
		);
  };
}

//Step 55 says to add to the - element. I don't see that element. 