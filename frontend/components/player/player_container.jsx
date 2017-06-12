import { connect } from 'react-redux';
import PlayerBar from './player_bar';
import { receiveTrack, clearTrack } from '../../actions/player_actions';

const mapStateToProps = (state, ownProps) => ({
  song_url: state.player.song_url,
  cover_url: state.player.cover_url,
  title: state.player.title,
  artist: state.player.artist,
  visible: state.player.visible

});

const mapDispatchToProps = dispatch => ({
  receiveTrack: (post) => dispatch(receiveTrack(post)),
  clearTrack: () => dispatch(clearTrack())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerBar);
