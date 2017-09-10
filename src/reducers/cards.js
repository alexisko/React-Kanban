import {
  ADD_CARD,
  EDIT_CARD,
  DELETE_CARD,
  LOAD_CARDS
} from '../actions/Cards.js';

const initialState = [];

const cards = (state = initialState, action) => {
  switch(action.type) {
    case ADD_CARD:
      return [
        ...state,
        action.card
      ];

    case EDIT_CARD:
      return [
        ...action.cards
      ];

    case DELETE_CARD:
      return [
        ...action.card
      ];

    case LOAD_CARDS:
      return [
        ...action.cards
      ];

    default:
      return state;
  }
};

export default cards;