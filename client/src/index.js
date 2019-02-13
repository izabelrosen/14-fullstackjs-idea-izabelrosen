import React from 'react';
import ReactDOM from 'react-dom';
// import Routes from './Components/Routes';
import './index.css';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
