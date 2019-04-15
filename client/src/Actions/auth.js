import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  TOKEN_START,
  TOKEN_SUCCESS,
  TOKEN_FAILURE,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
} from '../Constants';

/* eslint-disable */

const url = `${process.env.REACT_APP_API_BASE_URL}/users`;

export const registerUser = (user, history) => (dispatch) => {
  console.log('fetching one user???');
  fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(user),
  })
  .then(res => res.json())
  .then(user => dispatch({
    type: REGISTER_USER_SUCCESS,
    payload: user,
  }),
  history.push('/signin')
  )
  .catch(err => dispatch({
    type: REGISTER_USER_FAILURE,
    payload: err.response.data
  }));
};

export const requestLogin = (cred) => {
  return {
    type: LOGIN_START,
    cred
  };
};

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  token: user.token,
  user: user.user
  // payload: user.user,
  // token: user.token
})

export const tokenSuccess = () => ({
    type: TOKEN_SUCCESS,
    payload: user,
});
