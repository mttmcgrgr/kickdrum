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
      <button className="close-player" onClick={this.props.clearTrack}>
        <img
          className="close-img"
          src="http://res.cloudinary.com/dccshngpp/image/upload/v1497234330/Down-Arrow-PNG-Pic_qyh5e9.png"/>
      </button>
     <div className="player-container">
      <img className="player-image" src={this.props.cover_url}/>
       <div className="player-text">
         <div className="player-title" > {this.props.title}</div>
         <div className="player-artist"> {this.props.artist}</div>
       </div>
          <div className="player-audio">
             <ReactAudioPlayer
               src={this.props.song_url}
               autoPlay />
          </div>
     </div>
    </div>
     );
  }


}

export default PlayerBar;
