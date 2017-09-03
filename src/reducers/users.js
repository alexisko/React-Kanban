import { ADD_USER } from '../actions/Users.js'; //if its index.js don't need to specify file, but if not you do

// reducers work hand in hand with the store
const initialState = [];

const users = (state = initialState, action) => {
  switch(action.type) {
    case ADD_USER:
      return [
        ...state,
        action.user
      ];

    default:
      return state;
  }
};

export default users;

