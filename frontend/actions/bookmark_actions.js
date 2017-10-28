import * as BookmarkApiUtil from '../util/bookmark_api_util';
export const RECEIVE_BOOKMARK = "RECEIVE_BOOKMARK";
export const REMOVE_BOOKMARK = "REMOVE_BOOKMARK";

const receiveBookmark = (bookmark) => ({
  type: RECEIVE_BOOKMARK,
  bookmark
});

const removeBookmark = (post) => ({
  type: REMOVE_BOOKMARK ,
  post
});

export const createBookmark = ( post_id ) => dispatch => (
    BookmarkApiUtil.createBookmark( post_id )
    .then( post => dispatch(receiveBookmark( bookmark )))
);

export const deleteBookmark = ( post_id ) => dispatch => (
    BookmarkApiUtil.deleteBookmark( post_id )
    .then( post => dispatch(removeBookmark( post )))
);
