import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchUser, deleteUser, clearUser } from '../../actions/user_actions';
import { fetchUserPosts, deletePost } from '../../actions/post_actions';
import { receiveTrack } from '../../actions/player_actions';


const mapStateToProps = state => ({
  user: state.user,
  currentUser: state.session.currentUser|| {}
});


const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  fetchUserPosts: id => dispatch(fetchUserPosts(id)),
  deleteUser: id => dispatch(deleteUser(id)),
  deletePost: id => dispatch(deletePost(id)),
  receiveTrack: post => dispatch(receiveTrack(post)),
  clearUser: user => dispatch(clearUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
