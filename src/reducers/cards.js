import {
  ADD_CARD,
  EDIT_CARD
} from '../actions/Cards.js';

const initialState = [];

const cards = (state = initialState, action) => {
  console.log("IN REDUCER", action);
  switch(action.type) {
    case ADD_CARD:
      return [
        ...state,
        action.card
      ];

    case EDIT_CARD:
      return [
        action.card
      ];

    default:
      return state;
  }
};

export default cards;