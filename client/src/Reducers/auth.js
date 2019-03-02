import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
} from '../Constants';

const initialState = {
  user: {},
  isFetching: false,
  isAuthenticated: false,
  statusText: null,
};

// export default function (state = initialState, action) {
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
        user: action.user,
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
        user: action.user,
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
