import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts, deletePost, createPost } from '../../actions/post_actions';
import { receiveTrack } from '../../actions/player_actions';

const mapStateToProps = state => ({
  posts: Object.keys(state.posts).map(id => state.posts[id])

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
)(PostIndex);
