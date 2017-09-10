// IMPORTS
import {
  getCards,
  addNewCard,
  removeCard,
  changeCard
} from '../lib/cardsxhr.js';

// EXPORTS
export const ADD_CARD = 'ADD_CARD';
export const EDIT_CARD = 'EDIT_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const LOAD_CARDS = 'LOAD_CARDS';

// ACTIONS
export const addCard = (card) => {
  return (dispatch) => {
    return addNewCard(card)
      .then((card) => {
        dispatch({
          type: ADD_CARD,
          card: card
        });
      });
  };
};

export const editCard = (card) => {
  return (dispatch) => {
    return changeCard(card)
      .then((cards) => {
        dispatch({
          type: EDIT_CARD,
          cards: cards
        });
      });
  };
};

export const deleteCard = (card) => {
  return (dispatch) => {
    return removeCard(card)
      .then((card) => {
        dispatch({
          type: DELETE_CARD,
          card: card
        });
      });
  };
};

export const loadCards = (cards) => {
  return (dispatch) => {
    return getCards()
      .then( (cards) => {
        dispatch({
          type: LOAD_CARDS,
          cards: cards
        });
      });
  };
};