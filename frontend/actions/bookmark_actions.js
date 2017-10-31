import * as BookmarkApiUtil from '../util/bookmark_api_util';
export const RECEIVE_BOOKMARK = "RECEIVE_BOOKMARK";
export const REMOVE_BOOKMARK = "REMOVE_BOOKMARK";
export const RECEIVE_USER_BOOKMARK = "RECEIVE_USER_BOOKMARK";
export const REMOVE_USER_BOOKMARK = "REMOVE_USER_BOOKMARK";

const receiveBookmark = ( bookmark ) => ({
  type: RECEIVE_BOOKMARK,
  bookmark
});

const removeBookmark = ( bookmark ) => ({
  type: REMOVE_BOOKMARK,
  bookmark
});

const receiveUserBookmark = ( bookmark ) => ({
  type: RECEIVE_USER_BOOKMARK,
  bookmark
});

const removeUserBookmark = ( bookmark ) => ({
  type: REMOVE_USER_BOOKMARK,
  bookmark
});

export const createUserBookmark = ( post_id ) => dispatch => (
    BookmarkApiUtil.createBookmark( post_id )
    .then( bookmark => dispatch(receiveUserBookmark( bookmark )))
);

export const deleteUserBookmark = ( post_id ) => dispatch => (
    BookmarkApiUtil.deleteBookmark( post_id )
    .then( bookmark => dispatch(removeUserBookmark( bookmark )))
);


export const createBookmark = ( post_id ) => dispatch => (
    BookmarkApiUtil.createBookmark( post_id )
    .then( bookmark => dispatch(receiveBookmark( bookmark )))
);

export const deleteBookmark = ( post_id ) => dispatch => (
    BookmarkApiUtil.deleteBookmark( post_id )
    .then( bookmark => dispatch(removeBookmark( bookmark )))
);
