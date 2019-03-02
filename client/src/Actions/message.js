import {
  FETCH_MESSAGES_START,
  FETCH_MESSAGES_SUCCESS,
  FETCH_MESSAGES_FAILURE,
  // NEW_MESSAGE_START,
  NEW_MESSAGE_SUCCESS,
  // NEW_MESSAGE_FAILURE,
} from '../Constants';

// each action creator is a function that needs to export
// thunk middleware: call the dispatch function = make async req
// dispatch: is like a resolver/promise: want to send data call dispatch
// pass in the type and payload and create the fetch
// add error message
/* eslint-disable */

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

export const requestMessage = () => ({
  type: FETCH_MESSAGE_START,
});

export const receiveMessage = message => ({
  type: NEW_MESSAGE_SUCCESS,
  payload: message,
});

export const rejectedMessage = () => ({
  type: FETCH_MESSAGE_FAILURE,
});

export const fetchMessages = () => (dispatch) => {
  fetch(url)
    .then(res => res.json())
    .then(messages => dispatch(receiveMessages(messages)));
  // ADD ERROR HANDLING
  // .catch(error => dispatch(rejectedMessages()));
};

// export const createMessage = (message) => (dispatch) => {
//   console.log('hallå from action?');
//   const requestOptions = {
//     method: "POST",
//     // headers: authHelper(),
//     body: JSON.stringify(message)
//   };
//   dispatch(requestMessage());

//   return fetch('http://localhost:3003/messages', requestOptions)
//     .then(res => res.json())
//     .then(message => {
//       dispatch(receiveMessage(message));
//     })
//     .catch(error => {
//       dispatch(rejectedMessage());
//     });
//   };

export const newMessage = (message) => (dispatch) => {
  console.log('fetching one message??');
  fetch('http://localhost:3003/messages', {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify(message),
})
  .then(res => res.json())
  .then(message => dispatch({
    type: NEW_MESSAGE_SUCCESS,
    payload: message,
  }));
};


// export const fetchMessages = () => (dispatch) => {
//   console.log('fetching messages?');
//   dispatch(requestMessages());

//   return fetch(url)
//     .then(res => res.json())
//     .then(messages => {
//       dispatch(receiveMessages(messages));
//     })
//     .catch(error => {
//       dispatch(rejectedMessages());
//     });
// };

// export const fetchMessages = () => (dispatch) => {
//   console.log('fetching messages?');
//   fetch('http://localhost:3003/messages')
//     .then(res => res.json())
//     .then(messages => dispatch({
//       type: FETCH_MESSAGES_SUCCESS,
//       payload: messages,
//     }));
// };