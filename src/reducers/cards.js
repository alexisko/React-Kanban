import {
  CARDS_ALL
} from '../actions/cards.js';

const initialState = [];

const cards = (state = initialState, action) => {
  switch(action.type) {
    case CARDS_ALL:
      let cards = [...state, ...action.cards];
      return cards;
    default:
      return state;
  }
};

export default cards;