import {RECEIVE_USER, REMOVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

const defaultState = {
  username : "",
  photo_url: "https://i.embed.ly/1/image?url=https%3A%2F%2Fcdn.last.fm%2Fflatness%2Fresponsive%2F2%2Fnoimage%2Fdefault_user_140_g2.png&key=ee8455290d984b30859308ec0b4d701f",
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
