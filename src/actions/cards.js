import axios from 'axios';

export const CARDS_ALL = 'CARDS_ALL';
export const CARDS_NEW = 'CARDS_NEW';
export const CARDS_MOVE = 'CARDS_MOVE';

export const loadCards = (cards) => {
  return dispatch => {
    dispatch({
      type: CARDS_ALL,
      cards: cards
    });
  };
};

export const createNewCard = (card) => {
  return dispatch => {
    axios.post('/card/new', card)
      .then((card) => {
        dispatch({
          type: CARDS_NEW,
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
          type: CARDS_MOVE,
          id: id,
          status: data.status
        });
      })
      .catch((err) => {
        console.log('ERROR: ', err);
      });
  };
};