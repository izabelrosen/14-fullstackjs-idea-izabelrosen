import {
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from '../Constants';

const initialState = {
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
        user: action.payload,
        isFetching: false,
      };

    case FETCH_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default user;
