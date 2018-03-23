import axios from 'axios';

export const CARDS_ALL = 'CARDS_ALL';
export const CARDS_CLEAR = 'CARDS_CLEAR';
export const CARD_NEW = 'CARD_NEW';
export const CARD_DELETE = 'CARD_DELETE';
export const CARD_UPDATE = 'CARD_UPDATE';
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
    axios.post('/card/new', card)
      .then((card) => {
        dispatch({
          type: CARD_NEW,
          card: card.data
        });
      })
      .catch((err) => {
        console.log('ERROR: ', err);
      });
  };
};

export const deleteCard = (id) => {
  return dispatch => {
    axios.delete(`/card/${id}`)
      .then(() => {
        dispatch({
          type: CARD_DELETE,
          id: id
        });
      })
      .catch((err) => {
        console.log('ERROR: ', err);
      });
  };
};

export const updateCard = (id, data) => {
  return dispatch => {
    axios.put(`/card/${id}`, data)
      .then((card) => {
        dispatch({
          type: CARD_UPDATE,
          id: id,
          card: card.data
        });
      })
      .catch((err) => {
        console.log('ERROR: ', err);
      });
  };
};

export const moveCard = (id, data) => {
  return dispatch => {
    axios.put(`/card/move/${id}`, data)
      .then((card) => {
        dispatch({
          type: CARD_MOVE,
          id: id,
          status: data.status
        });
      })
      .catch((err) => {
        console.log('ERROR: ', err);
      });
  };
};