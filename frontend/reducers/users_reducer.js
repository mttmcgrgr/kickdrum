import {RECEIVE_USER, REMOVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

const UsersReducer = (state = {}, action) => {
  let newState = merge({}, state);
  switch(action.type){
    case RECEIVE_USER:
      newState[action.user.id] = action.user;
      return newState;
    case REMOVE_USER:
      delete newState[action.userId];
      return newState;
    default:
      return state;
  }
};

export default UsersReducer;
