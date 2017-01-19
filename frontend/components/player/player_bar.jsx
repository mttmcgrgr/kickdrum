import React from 'react';
import Sound from 'react-sound';
import ReactAudioPlayer from 'react-audio-player';

class PlayerBar extends React.Component {
  constructor(props) {
    super(props);

  }




  render() {
    return (
     <div className="player-container">
       <div className="footer_text">
        <div>Title: {this.props.title}</div>
        <div className="footer_artist"> Artist: {this.props.artist}</div>
       </div>
        <ReactAudioPlayer
          src={this.props.song_url}
          autoPlay
        />
     </div>
     );
  }


}

export default PlayerBar;

// // render() {
// //   return (
// //     <div className="player-container">
//       <div className="footer_text">Title: {this.props.title}</div>
//       <div className="footer_artist"> Artist: {this.props.artist}</div>
// //       <audio controls >
// //         <source src={ this.props.song_url } type='audio/mpeg'/>
// //       </audio>
// //     </div>
// //   );
// }
