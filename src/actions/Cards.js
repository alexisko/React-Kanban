export const ADD_CARD = 'ADD_CARD';
export const EDIT_CARD = 'EDIT_CARD';
export const DELETE_CARD = 'DELETE_CARD';

export const addCard = (card) => {
  console.log("THIS IS MY CARD IN ACTION", card);
  return {
    type: ADD_CARD,
    card: card
  };
};

export const editCard = (card) => {
  return {
    type: EDIT_CARD,
    card:card
  };
};

