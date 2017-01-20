import {RECEIVE_USER, REMOVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

const defaultState = {
  username : "Add your first post",
  posts: [{
    cover_url: "https://res.cloudinary.com/dccshngpp/image/upload/v1484894838/gelbe_Note_jzhs4a.png",
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
