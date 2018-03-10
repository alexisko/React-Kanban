import { combineReducers } from 'redux';

// REDUCERS
import users from './users.js';
import cards from './cards.js';

const reducers = combineReducers({
  users,
  cards
});

export default reducers;