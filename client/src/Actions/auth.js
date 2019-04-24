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

const url = `${process.env.REACT_APP_API_BASE_URL}/auth`;

export const registerUser = (user, history) => (dispatch) => {
  fetch(`${url}/register`, {
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

export const loginUser = (user, history) => (dispatch) => {
  fetch(`${url}/login`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(user),
  })
  .then(res => res.json())
  .then(res => {
    if (!res.authenticated) {
      dispatch(loginFailure(res.message || 'Oups! Something went wrong...'));
      return Promise.reject(res);
    }
    localStorage.setItem('user', JSON.stringify(res.user));
    localStorage.setItem('token', res.token);
    dispatch(loginSuccess(res));
    history.push('/allchats')
  })
  .catch(err => console.log('Error: ', err));
}

export const tokenSuccess = () => ({
    type: TOKEN_SUCCESS,
    payload: user,
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user
});

export const loginFailure = (message) => ({
  type: LOGIN_FAILURE,
  message
});

export const requestLogout = () => ({
  type: LOGOUT_START,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const logoutFailure = () => ({
  type: LOGOUT_FAILURE,
});

export const logoutUser = () => (dispatch) => {
  dispatch(requestLogout());
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  dispatch(logoutSuccess());
};
