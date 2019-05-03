import React from 'react';
import ReactDOM from 'react-dom';
// import Routes from './Components/Routes';
import './index.css';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

// ReactDOM.render((
//   <Provider store={store}>
//     <App />
//   </Provider>
// ), document.getElementById('root'));
// // ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

// import React from "react";
// import { render } from "react-dom";
// import { Root } from "./containers";
// import "semantic-ui-css/semantic.min.css";

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();

// Provider provides our react app tillgång till redux store -
// skickar store som en property till providern
