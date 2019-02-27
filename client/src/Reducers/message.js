// evaluate any actions that are committed; fetching the messages and creating a new message
// actions are called types and they are constants

import {
  FETCH_MESSAGES_START,
  FETCH_MESSAGES_SUCCESS,
  FETCH_MESSAGES_FAILURE,
  FETCH_MESSAGE_START,
  FETCH_MESSAGE_SUCCESS,
  FETCH_MESSAGE_FAILURE,
} from '../Constants';

// represents the messages that comes in from the action and
// the action is where the fetch req is happening
// message is an object which is the response that gets back
const initialState = {
  messages: [],
  message: {},
  isFetching: false,
};

// takes in the state and action will incl a type
// action is an object and will have a type
// look at what type is being passed
// default for now because the action does not take anything in yet
// the action payload comes from the message/action
export const messages = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MESSAGES_START:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_MESSAGES_SUCCESS:
      console.log('reducer');
      return {
        ...state,
        messages: action.payload,
        isFetching: false,
      };

    case FETCH_MESSAGES_FAILURE:
      return {
        ...state,
        isFetching: false,
      };

    default:
      return state;
  }
};
export default messages;
