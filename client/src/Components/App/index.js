import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import { Container } from 'semantic-ui-react';

// import { Header } from '../Header';
// import requiresAuth from '../Auth';

import Home from '../../Views/Site/Home';
import SignIn from '../../Views/Site/SignIn';
import SignUp from '../../Views/Site/SignUp';

// import './style.css';

/*  eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */
class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* <Header /> */}
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/signin' component={SignIn} />
          </Switch>
      </div>
    );
  }
}

export default App;
