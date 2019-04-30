import { combineReducers } from 'redux';
import { messages } from './message';
import { user } from './user';
import { auth } from './auth';
// import message from './message';
// import user from './user';
// import auth from './auth';

const rootReducer = combineReducers({
  messages,
  user,
  auth,
  // messages,
  // messages: message,

});
export default rootReducer;
