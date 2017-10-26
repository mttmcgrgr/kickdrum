import * as BookmarkApiUtil from '../util/bookmark_api_util';
import { receivePost } from './post_actions';



export const createBookmark = ( bookmark ) => dispatch => (
    BookmarkApiUtil.createBookmark( bookmark )
    .then( post => dispatch(receivePost( post )))
);

export const deleteBoookmark = ( post_id ) => dispatch => (
    BookmarkApiUtil.deleteBookmark( post_id )
    .then( post => dispatch(receivePost( post )))
);
