import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './Components/App';
import store from './Store';
import { verifyToken, tokenFailure } from './Actions/auth';


const user = localStorage.getItem('user') || null;
const token = localStorage.getItem('token') || null;

const Root = () => {
  if (user && token) {
    store.dispatch(verifyToken(token)).then(() => {});
  } else {
    store.dispatch(tokenFailure('You are not authenticated'));
  }
  return (
    // Provider is the bridge between react and redux
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
};

export default Root;
