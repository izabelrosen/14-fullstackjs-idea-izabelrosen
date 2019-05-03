import {
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from '../Constants';

/* eslint-disable */

const url = `${process.env.REACT_APP_API_BASE_URL}/users`;

export const requestUser = () => ({
  type: FETCH_USER_START,
});

export const receiveUser = user => ({
  type: FETCH_USER_SUCCESS,
  payload: user,
});

export const rejectedUser = () => ({
  type: FETCH_USER_FAILURE,
});

export const fetchUser = userid => dispatch => {
  dispatch(requestUser());

  return fetch(`${url}/${userid}`)
    .then(res => res.json())
    .then(user => {
      dispatch(receiveUser(user));
    })
    .catch(error => {
      dispatch(rejectedUser());
    });
};

export const fetchUsers = () => dispatch => {
  dispatch(requestUser());

  return fetch(`${url}`)
    .then(res => res.json())
    .then(user => {
      dispatch(receiveUser(user));
    })
    .catch(error => {
      dispatch(rejectedUser());
    });
};