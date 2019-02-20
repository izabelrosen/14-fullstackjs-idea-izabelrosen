import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {};

const middleware = [thunk];

// spread because thunk is in an array
const store = createStore(
  rootReducer, 
  initialState,
  applyMiddleware(...middleware),
);

export default store;
