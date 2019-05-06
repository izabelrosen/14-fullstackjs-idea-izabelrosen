import {
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  DELETE_USER_START,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
} from '../Constants';

const initialState = {
  users: [],
  user: {},
  isFetching: false,
};

// export default function (state = initialState, action) {
export const user = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_START:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_USER_SUCCESS:
      return {
        ...state,
        users: action.payload,
        isFetching: false,
      };

    case FETCH_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
      };

    case DELETE_USER_START:
      return {
        ...state,
        isFetching: true,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        // object destructuring
        // filter out the id that is not deleted
        // that is not matched with the deleted id
        users: state.users.filter(({ _id }) => (
          _id !== action.payload
        )),
      };

    case DELETE_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
      };

    default:
      return state;
  }
};

export default user;
