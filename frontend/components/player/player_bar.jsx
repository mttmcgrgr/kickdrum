import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

class PlayerBar extends React.Component {
  constructor() {
    super();
  }


  render() {
    const playerClass = this.props.visible ? "footer-playbar" : "hidden-playbar";
    return (
    <div className={playerClass}>
     <div className="player-container">
      <img className="player-image" src={this.props.cover_url}/>
       <div className="player-text">
         <div className="player-title" > {this.props.title}</div>
         <div className="player-artist"> {this.props.artist}</div>
       </div>
       <div className="player-audio">
         <ReactAudioPlayer
           src={this.props.song_url}
           autoPlay
         />
       </div>
     </div>
    </div>
     );
  }


}

export default PlayerBar;
