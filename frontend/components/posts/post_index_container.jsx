import { connect } from 'react-redux';
import PostIndex from './post_index';
import GridFeed from './grid_feed';
import { fetchPosts, deletePost, createPost } from '../../actions/post_actions';
import { createBookmark, deleteBookmark } from '../../actions/bookmark_actions';
import { receiveTrack } from '../../actions/player_actions';

const mapStateToProps = state => ({
  posts: Object.keys(state.posts).map(id => state.posts[id]),
  user: state.user,
  currentUser: state.session.currentUser|| {}
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  deletePost: id => dispatch(deletePost(id)),
  receiveTrack: post => dispatch(receiveTrack(post)),
  createBookmark: (post_id) => dispatch(createBookmark(post_id)),
  deleteBookmark: (post_id) => dispatch(deleteBookmark(post_id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex, GridFeed);
