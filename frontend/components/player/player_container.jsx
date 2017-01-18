import { connect } from 'react-redux';
import PlayerBar from './player_bar';
import { receiveTrack} from '../../actions/player_actions';

const mapStateToProps = (state, ownProps) => ({
  song_url: state.player.song_url,
  title: state.player.title,
  artist: state.player.artist,
  visible: state.player.visible

});

const mapDispatchToProps = dispatch => ({
  receiveTrack: (post) => dispatch(receiveTrack(post))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerBar);
