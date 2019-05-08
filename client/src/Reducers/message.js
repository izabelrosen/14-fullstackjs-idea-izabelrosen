// evaluate any actions that are committed; fetching the messages and creating a new message
// actions are called types and they are constants

import {
  FETCH_MESSAGES_START,
  FETCH_MESSAGES_SUCCESS,
  FETCH_MESSAGES_FAILURE,
  NEW_MESSAGE_START,
  NEW_MESSAGE_SUCCESS,
  NEW_MESSAGE_FAILURE,
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
// the action payload comes from the message/action
export const messages = (state = initialState, action) => {
// export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_MESSAGES_START:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_MESSAGES_SUCCESS:
      console.log('reducer all messages');
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

    case NEW_MESSAGE_START:
      return {
        ...state,
        isFetching: true,
      };

    case NEW_MESSAGE_SUCCESS:
      console.log('reducer ONE msg');
      console.log(action.payload);
      return {
        ...state,
        messages: [...state.messages, action.payload.newMessage],
        // message: action.payload,
        isFetching: false,
      };

    case NEW_MESSAGE_FAILURE:
      return {
        ...state,
        isFetching: false,
      };

    default:
      return state;
  }
};
export default messages;
