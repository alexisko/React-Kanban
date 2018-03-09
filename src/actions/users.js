import axios from 'axios';

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export const loginUser = (user) => {
  return dispatch => {
    dispatch({
      type: LOGIN_USER,
      user: user
    });
  }
}

export const logoutUser = () => {
  return dispatch => {
    axios.get('/user/logout')
      .then(() => {
        dispatch({
          type: LOGOUT_USER
        })
      })
      .catch((err) => {
        console.log('ERROR: ', err);
      });
  }
}