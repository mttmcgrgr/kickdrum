import { connect } from 'react-redux';
import SessionFeed from './session_feed';
import { fetchPosts, deletePost, createPost } from '../../actions/post_actions';

const mapStateToProps = state => ({
  posts: Object.keys(state.posts).map(id => state.posts[id])

});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionFeed);
