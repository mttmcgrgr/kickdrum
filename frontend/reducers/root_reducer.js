import { combineReducers } from 'redux';
import PostsReducer from './posts_reducer';
import SessionReducer from './session_reducer';
import UsersReducer from './users_reducer';
import PlayerReducer from './player_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  posts: PostsReducer,
  user: UsersReducer,
  player: PlayerReducer
});

export default rootReducer;
