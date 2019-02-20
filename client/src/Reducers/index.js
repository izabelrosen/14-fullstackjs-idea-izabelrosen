import { combineReducers } from 'redux';
import message from './message';

export default combineReducers({
  messages: message,
});
