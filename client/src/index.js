import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import Routes from './Components/Routes';
import './index.css';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';
import store from './Store';

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
