import { RECEIVE_TRACK, CLEAR_TRACK } from '../actions/player_actions';
import merge from 'lodash/merge';

const defaultState = {
  title: "",
  artist: "",
  song_url: "",
  visible: false,
  cover_url: "",
  queue: []
};


const PlayerReducer = (state = defaultState, action) => {
  let newState = merge({}, state);
  switch(action.type){
    case RECEIVE_TRACK:
      newState.song_url = action.post.song_url;
      newState.title = action.post.title;
      newState.artist = action.post.artist;
      newState.cover_url = action.post.cover_url;
      newState.visible = true;
      return newState;
    case CLEAR_TRACK:
      return merge({}, defaultState);
    default:
      return state;
  }
};

export default PlayerReducer;
