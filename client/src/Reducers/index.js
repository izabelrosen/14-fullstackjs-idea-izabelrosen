import { combineReducers } from 'redux';
import message from './message';

const rootReducer = combineReducers({
  // messages,
  messages: message,
});
export default rootReducer;
