import { connect } from 'react-redux';
import PlayerBar from './player_bar';
import { receiveTrack, clearTrack } from '../../actions/player_actions';

const mapStateToProps = (state, ownProps) => ({
  currentSong: state.player.currentSong || {},
  queue: state.player.queue || [],
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
