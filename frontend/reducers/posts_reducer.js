import { RECEIVE_ALL_POSTS,
         RECEIVE_POST,
         REMOVE_POST } from '../actions/post_actions';
import merge from 'lodash/merge';

const defaultState = {
  title: "",
  artist: "",
  cover_url: "",
  song_url: ""
};

const PostsReducer = (state = defaultState, action) => {
  let newState = merge({}, state);
  switch(action.type){
    case RECEIVE_ALL_POSTS:
      return action.posts;
    case RECEIVE_POST:
      newState[action.post.id] = action.post;
      return newState;
    case REMOVE_POST:
      let nextState = merge({}, state);
      delete nextState[action.post.id];
      return nextState;
    default:
      return state;
  }
};

export default PostsReducer;
