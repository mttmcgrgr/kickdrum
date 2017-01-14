import { connect } from 'react-redux';
import PostForm from './post_form';
import { fetchPost, createPost, updatePost } from '../../actions/post_actions';

const mapStateToProps = state => (
  {user: state.session.currentUser}
);

const mapDispatchToProps = dispatch => (
  {createPost: post => dispatch(createPost(post))}
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
