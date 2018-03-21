import {
  CARDS_ALL,
  CARDS_NEW,
  CARDS_MOVE,
  CARDS_CLEAR
} from '../actions/cards.js';

const initialState = [];

const cards = (state = initialState, action) => {
  switch(action.type) {
    case CARDS_ALL:
      let cards = [...state, ...action.cards];
      return cards;
    case CARDS_NEW:
      return [...state, action.card];
    case CARDS_MOVE:
      let editedCards = state.map((card) => {
        if(card.id === parseInt(action.id)) {
          card.status = action.status;
        }
        return card;
      });
      return editedCards;
    case CARDS_CLEAR:
      return [];
    default:
      return state;
  }
};

export default cards;