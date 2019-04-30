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

const initialState = {
  user: {},
  token: {},
  isFetching: false,
  isAuthenticated: false,
  statusText: null,
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        user: action.payload,
        statusText: 'You have successfully logged in!',
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        user: null,
        statusText: 'Something went wrong when trying to sign in...',
      };

    case TOKEN_START:
      return {

      };

    case TOKEN_SUCCESS:
      return {

      };

    case TOKEN_FAILURE:
      return {

      };

    case LOGOUT_START:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        token: null,
        isFetching: false,
        isAuthenticated: false,
        statusText: 'Successfully logged out!',
      };

    case LOGOUT_FAILURE:
      return {
        ...state,
        user: null,
        token: null,
        isFetching: false,
        isAuthenticated: false,
        statusText: `Error: ${action.message}`,
      };

    case REGISTER_USER_START:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
      };

    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        user: action.payload,
        statusText: 'Successfully registered!',
      };

    case REGISTER_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        user: null,
        statusText: 'Something went wrong when trying to register.',
      };

    default:
      return state;
  }
};
export default auth;
