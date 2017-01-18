import React from 'react';

class PlayerBar extends React.Component {
  constructor(props) {
    super(props);

  }



  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <h3>{this.props.artist}</h3>
        <audio controls>
          <source src={ this.props.song_url } type='audio/mpeg'/>
        </audio>
      </div>
    );
  }
}

export default PlayerBar;
