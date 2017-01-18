import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchUser, deleteUser } from '../../actions/user_actions';
import { fetchUserPosts, deletePost } from '../../actions/post_actions';
import { receiveTrack } from '../../actions/player_actions';


const mapStateToProps = state => ({
  user: state.user
});


const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  fetchUserPosts: id => dispatch(fetchUserPosts(id)),
  deleteUser: id => dispatch(deleteUser(id)),
  deletePost: id => dispatch(deletePost(id)),
  receiveTrack: post => dispatch(receiveTrack(post))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
