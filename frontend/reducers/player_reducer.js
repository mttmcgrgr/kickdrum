import { RECEIVE_TRACK, CLEAR_TRACK } from '../actions/player_actions';
import merge from 'lodash/merge';

const defaultState = {
  currentSong: {
    title: "",
    artist: "",
    song_url: "",
    cover_url: ""
  },
  queue: [],
  visible: false
};


const PlayerReducer = (state = defaultState, action) => {
  let newState = merge({}, state);
  switch(action.type){
    case RECEIVE_TRACK:
      newState.currentSong = action.post;
      newState.visible = true;
      return newState;
    case CLEAR_TRACK:
      return merge({}, defaultState);
    default:
      return state;
  }
};

export default PlayerReducer;
