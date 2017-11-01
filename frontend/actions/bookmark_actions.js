import * as BookmarkApiUtil from '../util/bookmark_api_util';
export const RECEIVE_BOOKMARK = "RECEIVE_BOOKMARK";
export const REMOVE_BOOKMARK = "REMOVE_BOOKMARK";
export const RECEIVE_PROFILE_BOOKMARK = "RECEIVE_PROFILE_BOOKMARK";
export const REMOVE_PROFILE_BOOKMARK = "REMOVE_PROFILE_BOOKMARK";

const receiveBookmark = ( bookmark ) => ({
  type: RECEIVE_BOOKMARK,
  bookmark
});

const removeBookmark = ( bookmark ) => ({
  type: REMOVE_BOOKMARK,
  bookmark
});

const receiveProfileBookmark = ( bookmark ) => ({
  type: RECEIVE_PROFILE_BOOKMARK,
  bookmark
});

const removeProfileBookmark = ( bookmark ) => ({
  type: REMOVE_PROFILE_BOOKMARK,
  bookmark
});

export const createProfileBookmark = ( post_id ) => dispatch => (
    BookmarkApiUtil.createBookmark( post_id )
    .then( bookmark => dispatch(receiveProfileBookmark( bookmark )))
);

export const deleteProfileBookmark = ( post_id ) => dispatch => (
    BookmarkApiUtil.deleteBookmark( post_id )
    .then( bookmark => dispatch(removeProfileBookmark( bookmark )))
);


export const createBookmark = ( post_id ) => dispatch => (
    BookmarkApiUtil.createBookmark( post_id )
    .then( bookmark => dispatch(receiveBookmark( bookmark )))
);

export const deleteBookmark = ( post_id ) => dispatch => (
    BookmarkApiUtil.deleteBookmark( post_id )
    .then( bookmark => dispatch(removeBookmark( bookmark )))
);
