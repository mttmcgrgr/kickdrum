import { combineReducers } from 'redux';
import PostsReducer from './posts_reducer';
import SessionReducer from './session_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  posts: PostsReducer
});

export default rootReducer;
