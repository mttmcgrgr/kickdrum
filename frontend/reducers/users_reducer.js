import {RECEIVE_USER, REMOVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

const defaultState = {
  username : "",
  posts: [{
    cover_url: "",
    song_url: "",
    title: "",
    artist: ""
   }]
};

const UsersReducer = (state = defaultState, action) => {
  let newState = merge({}, state);
  switch(action.type){
    case RECEIVE_USER:
      return action.user;
    case REMOVE_USER:
      delete newState[action.userId];
      return newState;
    default:
      return state;
  }
};

export default UsersReducer;
