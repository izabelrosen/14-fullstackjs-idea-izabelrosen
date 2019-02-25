import {
  FETCH_MESSAGES_START,
  FETCH_MESSAGES_SUCCESS,
  FETCH_MESSAGES_FAILURE,
  FETCH_MESSAGE_START,
  FETCH_MESSAGE_SUCCESS,
  FETCH_MESSAGE_FAILURE,
} from '../Constants';

// each action creator is a function that needs to export
// thunk middleware: call the dispatch function = make async req
// dispatch: is like a resolver/promise: want to send data call dispatch
// pass in the type and payload and create the fetch


const url = `${process.env.REACT_APP_API_BASE_URL}/messages`;

export const requestMessages = () => ({
  type: FETCH_MESSAGES_START,
});

export const receiveMessages = messages => ({
  type: FETCH_MESSAGES_SUCCESS,
  payload: messages,
});

export const rejectedMessages = () => ({
  type: FETCH_MESSAGES_FAILURE,
});

// export const fetchMessages = () => (dispatch) => {
//   dispatch(requestMessages());
//   return fetch(url)
//     .then(res => res.json())
//     .then((messages) => {
//       dispatch(receiveMessages(messages));
//     })
//     .catch((error) => {
//       console.log(error);
//       dispatch(rejectedMessages());
//     });
// };

export const fetchMessages = () => (dispatch) => {
  fetch(url)
    .then(res => res.json())
    .then(messages => dispatch({
      type: FETCH_MESSAGES_SUCCESS,
      payload: messages,
    }));
};
