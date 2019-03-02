import React, { Component } from 'react';
import '../App';
import { withRouter } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import Button from '@material-ui/core/Button';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

/*  eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */
export class SignUpForm extends Component {
  render() {
    return (
      <div className="signup">
      <h1>SIGN UP</h1>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <TextField
          hintText="Email"
          floatingLabelText="Enter your email"
        />
        <br />
        {/* <TextField
          hintText="Name"
          floatingLabelText="Name"
        /> */}
        <TextField
          hintText="Username"
          floatingLabelText="Username"
        />
        <br />
        <TextField
          hintText="Password Field"
          floatingLabelText="Password"
          type="password"
        />
        <br />
        <br />
        <Button variant="outlined" color="secondary">
          SIGN UP
        </Button>

        </MuiThemeProvider>
      </div>
    );
  }
}

export default withRouter(SignUpForm);
