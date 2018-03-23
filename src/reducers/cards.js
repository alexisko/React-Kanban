import {
  CARDS_ALL,
  CARDS_CLEAR,
  CARD_NEW,
  CARD_MOVE,
  CARD_DELETE,
  CARD_UPDATE
} from '../actions/cards.js';

const initialState = [];

const cards = (state = initialState, action) => {
  switch(action.type) {
    case CARDS_ALL:
      let cards = [...state, ...action.cards];
      return cards;

    case CARDS_CLEAR:
      return [];

    case CARD_NEW:
      return [...state, action.card];

    case CARD_DELETE:
      let deleted = state.filter((card) => {
        if(card.id !== parseInt(action.id)) {
          return card;
        }
      });
      return deleted;

    case CARD_UPDATE:
      let updated = state.filter((card) => {
        if(card.id === parseInt(action.id)) {
          // update card
        }
      });
      return updated;
    case CARD_MOVE:
      let edited = state.map((card) => {
        if(card.id === parseInt(action.id)) {
          card.status = action.status;
        }
        return card;
      });
      return edited;

    default:
      return state;
  }
};

export default cards;