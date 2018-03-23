export const CARDS_ALL = 'CARDS_ALL';
export const CARDS_CLEAR = 'CARDS_CLEAR';
export const CARD_NEW = 'CARD_NEW';
export const CARD_DELETE = 'CARD_DELETE';
export const CARD_MOVE = 'CARD_MOVE';


export const loadCards = (cards) => {
  return dispatch => {
    dispatch({
      type: CARDS_ALL,
      cards: cards
    });
  };
};

export const clearCards = () => {
  return dispatch => {
    dispatch({
      type: CARDS_CLEAR
    });
  };
};

export const createNewCard = (card) => {
  return dispatch => {
    dispatch({
      type: CARD_NEW,
      card: card
    });
  };
};

export const deleteCard = (id) => {
  return dispatch => {
    dispatch({
      type: CARD_DELETE,
      id: id
    });
  };
};

export const moveCard = (id, data) => {
  return dispatch => {
    dispatch({
      type: CARD_MOVE,
      id: id,
      status: data.status
    });
  };
};