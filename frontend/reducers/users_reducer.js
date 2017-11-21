import {RECEIVE_USER, REMOVE_USER } from '../actions/user_actions';
import { RECEIVE_PROFILE_BOOKMARK, REMOVE_PROFILE_BOOKMARK } from '../actions/bookmark_actions';
import merge from 'lodash/merge';

const defaultState = {
  username : "",
  photo_url: "https://tinyurl.com/y7qh9mqs"
};

const UsersReducer = (state = defaultState, action) => {
  const newState = merge({}, state);

  switch(action.type){
    case RECEIVE_USER:
      return action.user;
    case REMOVE_USER:
      delete newState[action.userId];
      return newState;
    case RECEIVE_PROFILE_BOOKMARK:
      if(newState.posts[action.bookmark.post_id].bookmarks){
        newState.posts[action.bookmark.post_id].bookmarks[action.bookmark.id] = action.bookmark
      } else {
        newState[action.bookmark.post_id].bookmarks = {};
        newState[action.bookmark.post_id].bookmarks[action.bookmark.id] = action.bookmark
      }
      newState.posts[action.bookmark.post_id].bookmarkCount += 1
      newState.posts[action.bookmark.post_id].hasMarked = true
      return newState;
    case REMOVE_PROFILE_BOOKMARK:
     if(newState.posts[action.bookmark.post_id]){
       newState.posts[action.bookmark.post_id].bookmarkCount -= 1
       newState.posts[action.bookmark.post_id].hasMarked = false
     }
      delete newState.user_bookmarks[action.bookmark.id]
      return newState;
    default:
      return state;
  }
};

export default UsersReducer;


/*
posts: [{
  title: "",
  artist: "",
  cover_url: "https://tinyurl.com/y9kttyfx",
  song_url: ""
}],
bookmarks: {},
*/
