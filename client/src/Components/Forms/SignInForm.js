import React, { Component } from 'react';
import '../App';
import TextField from 'material-ui/TextField';
import Button from '@material-ui/core/Button';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import { withRouter } from 'react-router-dom';

export class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(user);
  }

  render() {
    return (
      <div className="signin">
      <h1>SIGN IN</h1>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <form onSubmit = { this.handleSubmit }>
        <TextField
        name="email"
        type="email"
        onChange = { this.onChange }
        value = { this.state.email }
        floatingLabelText="Email"
        />
        <br />
        <TextField
        name="password"
        type="password"
        onChange = { this.onChange}
        value = { this.state.password }
        floatingLabelText="Password"
        />
        <br />
        <br />
        <Button
        type="submit"
        onSubmit = { this.onSubmit }
        variant="outlined"
        color="primary"
        className="signin__button"
        label="Send"
        >SIGN IN
        </Button>
        </form>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withRouter(SignInForm);
