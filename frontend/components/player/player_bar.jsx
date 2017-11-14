import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

class PlayerBar extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { currentSong, queue, clearTrack, visible } = this.props;
    const playerStyle = visible ? "footer-playbar" : "hidden-playbar";
    return (
    <div className={playerStyle}>
      <button className="close-player" onClick={clearTrack}>
        <img
          className="close-img"
          src="https://www.broadsheet.com.au/assets/icons/close.svg"/>
      </button>
     <div className="player-container">
      <img className="player-image" src={currentSong.cover_url}/>
       <div className="player-text">
         <div className="player-title" > {currentSong.title}</div>
         <div className="player-artist"> {currentSong.artist}</div>
       </div>
          <div className="player-audio">
             <ReactAudioPlayer
               src={currentSong.song_url}
               autoPlay />
          </div>
     </div>
    </div>
     );
  }


}

export default PlayerBar;
