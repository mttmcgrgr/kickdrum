import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchUser, deleteUser, clearUser } from '../../actions/user_actions';
import { fetchUserPosts, deletePost } from '../../actions/post_actions';
import { receiveTrack } from '../../actions/player_actions';
import { createUserBookmark, deleteUserBookmark } from '../../actions/bookmark_actions';


const mapStateToProps = state => ({
  user: state.user,
  posts: state.user.posts,
  currentUser: state.session.currentUser|| {}
});


const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  fetchUserPosts: id => dispatch(fetchUserPosts(id)),
  deleteUser: id => dispatch(deleteUser(id)),
  deletePost: id => dispatch(deletePost(id)),
  receiveTrack: post => dispatch(receiveTrack(post)),
  clearUser: user => dispatch(clearUser(user)),
  createBookmark: post_id => dispatch(createUserBookmark(post_id)),
  deleteBookmark: post_id => dispatch(deleteUserBookmark(post_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
