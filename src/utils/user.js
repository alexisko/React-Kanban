import axios from 'axios';

export const login = (user) => {
  return axios.post('/user/login', user);
};

export const logout = () => {
  return axios.post('/user/logout')
    .then(() => {
      console.log('SUCCESS: User was logged out');
    })
    .catch((err) => {
      console.log('ERROR:', err);
    });
};

export const createNewUser = (user) => {
  return axios.post('/user/signup', user)
    .then(() => {
      console.log('SUCCESS: User was successfully created');
    })
    .catch((err) => {
      console.log('ERROR:', err);
    });
};