import React, { Component } from 'react';
import '../App';
import TextField from 'material-ui/TextField';
import Button from '@material-ui/core/Button';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import { withRouter } from 'react-router-dom';

/*  eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */
export class SignInForm extends Component {
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
        <Button variant="outlined" color="primary">
          SIGN IN
        </Button>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withRouter(SignInForm);
