import React from 'react';
import './Track.css';

class Track extends React.Component{
  constructor(props) {
    super(props);

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(event) {  // '+' sign
    this.props.onAdd(this.props.track);
  }

  removeTrack(event) {  // '-' sign
    this.props.onRemove(this.props.track);
  }

  renderPreview() {
    if(this.props.track.preview_url){
      return (<p><audio controls><source src={this.props.track.preview_url} type="audio/mpeg" /></audio></p>);
    } else {
      return ;
    }
  }


  playAudio() {
    let url = this.props.track.preview_url;
    let x = new Audio(url);
    x.play();
  }
  
  
  renderAction() {
    if (this.props.isRemoval) {  // if to remove from playList
      return <a className="Track-action" onClick={this.removeTrack}> - </a>
    } // else add to playList
    return <a className="Track-action" onClick={this.addTrack}> + </a>;
  }

  render(){
    return (
      <div className="Track">
        <div className="Track-information">
          <h3> {this.props.track.name} </h3>
          <p> {this.props.track.artist} | {this.props.track.album} </p>
        <div className="button-container">
        {this.renderPreview()}
		</div>
		</div>
		{this.renderAction()}
      </div>
    )
  }
}

export default Track;