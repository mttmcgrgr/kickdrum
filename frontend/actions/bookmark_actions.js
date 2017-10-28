import * as BookmarkApiUtil from '../util/bookmark_api_util';
export const RECEIVE_BOOKMARK = "RECEIVE_BOOKMARK";
export const REMOVE_BOOKMARK = "REMOVE_BOOKMARK";

const receiveBookmark = ( bookmark ) => ({
  type: RECEIVE_BOOKMARK,
  bookmark
});

const removeBookmark = ( bookmark ) => ({
  type: REMOVE_BOOKMARK ,
  bookmark
});

export const createBookmark = ( post_id ) => dispatch => (
    BookmarkApiUtil.createBookmark( post_id )
    .then( bookmark => dispatch(receiveBookmark( bookmark )))
);

export const deleteBookmark = ( post_id ) => dispatch => (
    BookmarkApiUtil.deleteBookmark( post_id )
    .then( bookmark => dispatch(removeBookmark( bookmark )))
);
