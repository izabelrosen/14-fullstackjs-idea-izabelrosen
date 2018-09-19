import React, { Component } from 'react';
import '../../Components/App';
import { withRouter } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

export class SignUpForm extends Component {

  render() {
    return (
      <div className="signin">
      <h1>SIGN UP</h1>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <TextField
          hintText="Email"
          floatingLabelText="Enter your email"
        />
        <TextField
          hintText="First name"
          floatingLabelText="First name"
        />
        <TextField
          hintText="Last name"
          floatingLabelText="Last name"
        />
        <TextField
          hintText="Username"
          floatingLabelText="Username"
        />
        <TextField
          hintText="Password Field"
          floatingLabelText="Password"
          type="password"
        />
        <RaisedButton className="signup__button" label="Sign Up" primary={true} />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withRouter (SignUpForm);