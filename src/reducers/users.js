import {
  LOGIN_USER,
  LOGOUT_USER
} from '../actions/users.js';

const initialState = [];

const users = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_USER:
      let users = [...state, action.user];
      return users;
    default:
      return state;
  }
}

export default users;