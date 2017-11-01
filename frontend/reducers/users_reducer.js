import {RECEIVE_USER, REMOVE_USER } from '../actions/user_actions';
import { RECEIVE_PROFILE_BOOKMARK, REMOVE_PROFILE_BOOKMARK } from '../actions/bookmark_actions';
import merge from 'lodash/merge';
import { findPostById, getBookmarkIndex } from './selectors';

const defaultState = {
  username : "",
  photo_url: "http://res.cloudinary.com/dccshngpp/image/upload/v1509405171/download_sqdjiv.jpg",
  posts: {},
  user_bookmarks: {}
};

const UsersReducer = (state = defaultState, action) => {
  const newState = merge({}, state);

  switch(action.type){
    case RECEIVE_USER:
      console.log(newState, action);
      return action.user;
    case REMOVE_USER:
      delete newState[action.userId];
      return newState;
    case RECEIVE_PROFILE_BOOKMARK:
      newState.user_bookmarks[action.bookmark.id] = action.bookmark.post
      console.log(newState, action);
      return newState;
    case REMOVE_PROFILE_BOOKMARK:
      delete newState.user_bookmarks[action.bookmark.id]
      console.log(newState, action);
      return newState;
    default:
      return state;
  }
};

export default UsersReducer;


/*
receive bookmark
postIdx = findPostById(newState.posts, action.bookmark.post_id)
newState.posts[postIdx].bookmarks.push(action.bookmark)
newState.posts[postIdx].bookmarked_posts.push(action.bookmark.post)
newState.posts[postIdx].bookmarkCount += 1;
newState.posts[postIdx].hasMarked = true;

remove bookmark
postIdx = findPostById(newState.posts, action.bookmark.post_id);
postBookmarks = newState.posts[postIdx].bookmarks;
newState.posts[postIdx].bookmarkCount -= 1;
newState.posts[postIdx].hasMarked = false;
newState.posts[postIdx].bookmarks = postBookmarks.filter((bm) => {
  return bm.id !== action.bookmark.id
});
newState.posts[postIdx].bookmarked_posts = postBookmarks.filter((post) => {
  return post.id !== action.bookmark.post.id
});
*/
