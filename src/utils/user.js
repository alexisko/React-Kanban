import axios from 'axios';

export const login = (user) => {
  return axios.post('/login', user)
    .then((user) => {

    })
    .catch((err) => {

    });
};

export const logout = () => {
  return axios.post('/logout')
    .then(() => {

    })
    .catch((err) => {

    });
};

export const createNewUser = (user) => {
  return axios.post('/user/signup', user)
    .then(() => {
      console.log('SUCCESS: User was successfully created');
    })
    .catch((err) => {
      console.log('kljdsfklds');
      console.log('ERROR:', err);
    });
};