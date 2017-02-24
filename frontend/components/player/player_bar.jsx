import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

class PlayerBar extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    const playerClass = this.props.visible ? "footer-playbar" : "hidden-playbar";
    return (
    <div className={playerClass}>
     <div className="player-container">
      <img className="player-image" src={this.props.cover_url}/>
       <div className="player-text">
         <div>Title: {this.props.title}</div>
         <div> Artist: {this.props.artist}</div>
       </div>

        <ReactAudioPlayer
          src={this.props.song_url}
          autoPlay
        />
     </div>
    </div>
     );
  }


}

export default PlayerBar;
