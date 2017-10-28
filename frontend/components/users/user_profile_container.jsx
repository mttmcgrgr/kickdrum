import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchUser, deleteUser, clearUser } from '../../actions/user_actions';
import { fetchUserPosts, deletePost } from '../../actions/post_actions';
import { receiveTrack } from '../../actions/player_actions';
import { createBookmark, deleteBookmark } from '../../actions/bookmark_actions';


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
  clearUser: user => dispatch(clearUser(user)),
  createBookmark: post_id => dispatch(createBookmark(post_id)),
  deleteBookmark: post_id => dispatch(deleteBookmark(post_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
