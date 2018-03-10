import axios from 'axios';

export const createNewCard = (card) => {
  return axios.post('/card/new', card)
    .then(() => {
      console.log('SUCCESS: Card was created');
    })
    .catch((err) => {
      console.log('ERROR: ', err);
    });
};

export const getAllCards = () => {
  return axios.get('/card/all');
};