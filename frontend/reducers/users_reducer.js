import {RECEIVE_USER, REMOVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

const defaultState = {
  username : "",
  photo_url: "http://res.cloudinary.com/dccshngpp/image/upload/v1497327009/12-Vinyl-LP-Record-4_e9nbgk_gxlll1_z7ur3d.png",
  posts: [{
    cover_url: "http://res.cloudinary.com/dccshngpp/image/upload/v1496796665/12-Vinyl-LP-Record-4_e9nbgk.png",
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
