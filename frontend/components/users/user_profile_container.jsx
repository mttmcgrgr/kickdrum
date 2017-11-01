import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchUser, deleteUser, clearUser } from '../../actions/user_actions';
import { fetchUserPosts, deletePost } from '../../actions/post_actions';
import { receiveTrack } from '../../actions/player_actions';
import { createProfileBookmark, deleteProfileBookmark } from '../../actions/bookmark_actions';


const mapStateToProps = state => ({
  user: state.user,
  posts: Object.keys(state.user.posts).map(id =>
    state.user.posts[id]
  ).reverse()|| [],
  user_bookmarks: Object.keys(state.user.user_bookmarks).map(id =>
    state.user.user_bookmarks[id].post
  ).reverse()|| [],
  currentUser: state.session.currentUser|| {}
});


const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  fetchUserPosts: id => dispatch(fetchUserPosts(id)),
  deleteUser: id => dispatch(deleteUser(id)),
  deletePost: id => dispatch(deletePost(id)),
  receiveTrack: post => dispatch(receiveTrack(post)),
  clearUser: user => dispatch(clearUser(user)),
  createBookmark: post_id => dispatch(createProfileBookmark(post_id)),
  deleteBookmark: post_id => dispatch(deleteProfileBookmark(post_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
