import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import Header from './Header';
import Home from '../Views/Site/Home';
import SignIn from '../Views/Site/SignIn';
import SignUp from '../Views/Site/SignUp';
import AllChats from '../Views/Site/AllChats';
import MyChat from '../Views/Site/MyChat';
import PrivateRoute from './Auth';

/*  eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Header />
          <div className="container">
          <ul>
             <li><Link to="/">Hello Home</Link></li>
             <li><Link to="/signin">Sign In</Link></li>
             <li><Link to="/signup">Sign Up</Link></li>
             <li><Link to="/allchats">All my chats</Link></li>
             <li><Link to="/mychat">My Chat</Link></li>
          </ul>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <PrivateRoute exact path="/allchats" component={AllChats} />
            <Route exact path="/mychat" component={MyChat} />
          </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
