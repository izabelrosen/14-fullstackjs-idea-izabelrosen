import React, { Component } from 'react';
import '../../Components/App';
import { withRouter } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import Button from '@material-ui/core/Button';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

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
        <TextField
          hintText="Name"
          floatingLabelText="Name"
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

        <Button variant="outlined" color="secondary">
          SIGN UP
        </Button>

        </MuiThemeProvider>
      </div>
    );
  }
}

export default withRouter (SignUpForm);