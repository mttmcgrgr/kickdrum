import { combineReducers } from 'redux';
import PostsReducer from './posts_reducer';
import SessionReducer from './session_reducer';
import UsersReducer from './users_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  posts: PostsReducer,
  user: UsersReducer
});

export default rootReducer;
