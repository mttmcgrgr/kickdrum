import { connect } from 'react-redux';
import ListFeed from './list_feed';
import GridFeed from './grid_feed';
import { fetchPosts, deletePost, createPost } from '../../actions/post_actions';
import { receiveTrack } from '../../actions/player_actions';

const mapStateToProps = state => ({
  posts: Object.keys(state.posts).map(id => state.posts[id]),
  user: state.user,
  currentUser: state.session.currentUser|| {}
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  deletePost: id => dispatch(deletePost(id)),
  createPost: post => dispatch(createPost(post)),
  receiveTrack: post => dispatch(receiveTrack(post))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListFeed, GridFeed);
