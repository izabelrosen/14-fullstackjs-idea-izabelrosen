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
  constructor() {
    super();

    this.state = {
      username: '',
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

    const newUser = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };
    console.log(newUser);
  }

  render() {
    return (
      <div className="signup">
      <h1>SIGN UP</h1>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <form onSubmit = { this.handleSubmit }>
        <TextField
        type="text"
        name="username"
        onChange = { this.onChange }
        value = { this.state.username }
        floatingLabelText="Username"
        />
        <br />
        <TextField
        type="email"
        name="email"
        onChange = { this.onChange }
        value = { this.state.email }
        floatingLabelText="Email"
        />
        <br />
        <TextField
        type="password"
        name="password"
        onChange = { this.onChange }
        value = { this.state.password }
        floatingLabelText="Password"
        />
        <br />
        <br />
        <Button
        type="submit"
        onSubmit = { this.onSubmit }
        variant="outlined"
        className="register__button"
        label="Send"
        >REGISTER</Button>
        </form>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withRouter(SignUpForm);
