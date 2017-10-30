import { RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST, RECEIVE_POST_ERRORS } from '../actions/post_actions';
import { RECEIVE_BOOKMARK, REMOVE_BOOKMARK } from '../actions/bookmark_actions';
import merge from 'lodash/merge';
import { getPostKey, getBookmarkPost, getBookmarkIndex } from './selectors';

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
      console.log(action, newState)
      newState[action.bookmark.post_id].bookmarks.push(action.bookmark)
      return newState;
    case REMOVE_BOOKMARK:
      console.log(action, newState);
      newState[action.bookmark.post_id].bookmarks = action.bookmark.post_bookmarks
      return newState;
    case RECEIVE_POST_ERRORS:
      newState.errors = action.errors;
      return newState;
    default:
      return state;
  }
};

export default PostsReducer;


/*
let key = getPostKey(newState, getBookmarkPost(action));
let newBookmarks = getBookmarkPost(action).bookmarks || [];
newState[key].bookmarks = newBookmarks;
*/
