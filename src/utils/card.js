import axios from 'axios';

export const getAllCards = () => {
  return axios.get('/card/all');
};