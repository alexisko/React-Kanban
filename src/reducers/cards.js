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
    task: 'Get sh*t done!',
    priority: 'High',
    status: 'Done',
    created_by: 'You',
    assigned_to: 'You'
  },
  {
    id: 2,
    task: 'Random Task #1',
    priority: 'Low',
    status: 'To-Do',
    created_by: 'You',
    assigned_to: 'Anyone'
  },
  {
    id: 3,
    task: 'Random Task #2',
    priority: 'High',
    status: 'To-Do',
    created_by: 'You',
    assigned_to: 'Anyone'
  },
  {
    id: 4,
    task: 'Random Task #3',
    priority: 'Medium',
    status: 'To-Do',
    created_by: 'You',
    assigned_to: 'Anyone'
  },
  {
    id: 5,
    task: 'Random Task #4',
    priority: 'Low',
    status: 'To-Do',
    created_by: 'You',
    assigned_to: 'Anyone'
  },
  {
    id: 6,
    task: 'Random Task #5',
    priority: 'Medium',
    status: 'To-Do',
    created_by: 'You',
    assigned_to: 'Anyone'
  },
  {
    id: 7,
    task: 'A task with a really long title about noooothing',
    priority: 'Medium',
    status: 'In Progress',
    created_by: 'You',
    assigned_to: 'Anyone'
  }
];

let currentId = 7;

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