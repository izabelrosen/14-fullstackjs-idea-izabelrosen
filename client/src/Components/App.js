/*  eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Header from './Header';
import Home from '../Views/Site/Home';
import SignIn from '../Views/Site/SignIn';
import SignUp from '../Views/Site/SignUp';
import AllChats from '../Views/Site/AllChats';
import MyChat from '../Views/Site/MyChat';
import PrivateRoute from './Auth';
import Dashboard from '../Views/Admin/Dashboard';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Header />
          <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <PrivateRoute exact path="/allchats" component={AllChats} />
            <PrivateRoute exact path="/admin" component={Dashboard} />
            <Route exact path="/mychat" component={MyChat} />
          </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
