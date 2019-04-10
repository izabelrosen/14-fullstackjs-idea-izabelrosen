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

const url = `${process.env.REACT_APP_API_BASE_URL}/messages`;

export const registerUser = (user) => ({
    type: REGISTER_USER_SUCCESS,
    payload: user
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
  // payload: user.user,
  // token: user.token
})

export const tokenSuccess = () => ({
    type: TOKEN_SUCCESS,
    payload: user,
});
