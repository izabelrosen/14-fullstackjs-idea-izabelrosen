import React, { Component } from 'react';
import '../../Components/App';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

export default class SignIn extends Component {

  render() {
    return (
      <div className="signin">
      <h1>SIGN IN</h1>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <TextField
          hintText="Email"
          floatingLabelText="Enter your email"
        />
        <TextField
          hintText="Password"
          floatingLabelText="Password"
          type="password"
        />
            <RaisedButton className="signin__button" label="Sign In" primary={true} />
        </MuiThemeProvider>
      </div>
    );
  }
}