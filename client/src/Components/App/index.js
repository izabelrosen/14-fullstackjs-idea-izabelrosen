import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

import{ Header} from '../Header';
import requiresAuth from "../Auth";

import {
  Home,
  SignIn,
  SignUp
} from "../../Views/Site";

import "./style.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={SignIn} />
          </Switch>
      </div>
    );
  }
}

export default App;
