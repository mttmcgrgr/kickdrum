import { RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST, RECEIVE_ERRORS } from '../actions/post_actions';
import { RECEIVE_BOOKMARK, REMOVE_BOOKMARK } from '../actions/bookmark_actions';
import { findIndex } from '../util/util';
import merge from 'lodash/merge';

const defaultState = {
  title: "",
  artist: "",
  cover_url: "",
  song_url: "",
  errors: [],
  bookmarks: []
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
      delete newState[action.post.id];
      return newState;
    case RECEIVE_BOOKMARK:
      newState[action.bookmark.post_id].bookmarks.push(action.bookmark);
      return newState;
    case RECEIVE_ERRORS:
      newState.errors = action.errors
      return newState;
    case REMOVE_BOOKMARK:
      let bookmarkIndex = findIndex(newState[action.bookmark.post_id].bookmarks, action.bookmark);
      newState[action.bookmark.post_id].bookmarks.splice(bookmarkIndex, 1);
      return nextState;
    default:
      return state;
  }
};

export default PostsReducer;
