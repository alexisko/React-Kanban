export const CARDS_ALL = 'CARDS_ALL';
export const CARDS_NEW = 'CARDS_NEW';

export const allCards = (cards) => {
  return dispatch => {
    dispatch({
      type: CARDS_ALL,
      cards: cards
    });
  };
};