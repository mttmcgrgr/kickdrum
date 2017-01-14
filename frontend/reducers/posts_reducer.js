import { RECEIVE_ALL_POSTS,
         RECEIVE_POST,
         REMOVE_POST } from '../actions/post_actions';
import merge from 'lodash/merge';

const PostsReducer = (state = {}, action) => {
  let newState = merge({}, state);
  switch(action.type){
    case RECEIVE_ALL_POSTS:
      return action.posts;
    case RECEIVE_POST:
      newState[action.post.id] = action.post;
      return newState;
    case REMOVE_POST:
      delete newState[action.postId];
      return newState;
    default:
      return state;
  }
};

export default PostsReducer;
