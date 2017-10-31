import {RECEIVE_USER, REMOVE_USER } from '../actions/user_actions';
import { RECEIVE_USER_BOOKMARK, REMOVE_USER_BOOKMARK } from '../actions/bookmark_actions';
import merge from 'lodash/merge';
import { findPostById, getBookmarkIndex } from './selectors';

const defaultState = {
  username : "",
  photo_url: "http://res.cloudinary.com/dccshngpp/image/upload/v1509405171/download_sqdjiv.jpg",
  posts: [{
    cover_url: "http://res.cloudinary.com/dccshngpp/image/upload/v1496796665/12-Vinyl-LP-Record-4_e9nbgk.png",
    song_url: "",
    title: "",
    artist: "",
    bookmarks: []
  }],
  bookmarks: []
};

const UsersReducer = (state = defaultState, action) => {
  const newState = merge({}, state);
  let postIdx;
  let markIdx;
  let postBookmarks;

  switch(action.type){
    case RECEIVE_USER:
      return action.user;
    case REMOVE_USER:
      delete newState[action.userId];
      return newState;
    case RECEIVE_USER_BOOKMARK:
      postIdx = findPostById(newState.posts, action.bookmark.post_id)
      newState.posts[postIdx].bookmarks.push(action.bookmark)
      console.log(newState.posts, action, postIdx);
      return newState;
    case REMOVE_USER_BOOKMARK:
      postIdx = findPostById(newState.posts, action.bookmark.post_id)
      postBookmarks = newState.posts[postIdx].bookmarks
      newState.posts[postIdx].bookmarks = postBookmarks.filter((bm) => {
        return bm.id !== action.bookmark.id
      })
      console.log(newState.posts[postIdx], action.bookmark, postBookmarks);
      return newState;
    default:
      return state;
  }
};

export default UsersReducer;
