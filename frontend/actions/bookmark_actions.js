import * as BookmarkApiUtil from '../util/bookmark_api_util';
import { recievePost } from './post_actions';



export const createBookmark = (post_id, user_id) => dispatch => (
    BookmarkApiUtil.createBookmark(post_id, user_id)
    .then( post => dispatch(receivePost(post)))
);

export const deleteBoookmark = (post_id, user_id) => dispatch => (
    BookmarkApiUtil.deleteBookmark(post_id, user_id)
    .then( post => dispatch(receivePost(post)))
);
