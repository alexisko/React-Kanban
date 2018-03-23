import {
  CARDS_ALL,
  CARDS_CLEAR,
  CARD_NEW,
  CARD_MOVE,
  CARD_DELETE
} from '../actions/cards.js';

const initialState = [
  {
    id: 1,
    task: '',
    priority: '',
    status: '',
    created_by: '',
    assigned_to: ''
  }
];

let currentId = 3;

const cards = (state = initialState, action) => {
  switch(action.type) {
    case CARDS_ALL:
      return state;

    case CARDS_CLEAR:
      return [];

    case CARD_NEW:
      return [...state, {
        id: ++currentId,
        task: action.card.task,
        priority: action.card.priority,
        status: action.card.status,
        created_by: action.card.created_by,
        assigned_to: action.card.assigned_to
      }];

    case CARD_DELETE:
      let deleted = state.filter((card) => {
        if(card.id !== action.id) {
          return card;
        }
      });
      return deleted;

    case CARD_MOVE:
      let edited = state.map((card) => {
        if(card.id.toString() === action.id) {
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