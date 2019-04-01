import React, { Component } from 'react';
import '../App';
import { withRouter } from 'react-router-dom';
import {
  Button, Form, Label,
} from 'semantic-ui-react';
import TextField from 'material-ui/TextField';
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
      <Form onSubmit = { this.handleSubmit }>
        <Form.Field inline>
        <input type='text' placeholder='Username' />
        {/* <Label basic color='red' pointing='left'>
          That name is taken!
        </Label> */}
        </Form.Field>
        <Form.Field inline>
        <input type='email' placeholder='Email' />
        {/* <Label basic color='red' pointing='left'>
          That name is taken!
        </Label> */}
        </Form.Field>
        <Form.Field inline>
        <input type='password' placeholder='Password' />
        {/* <Label basic color='red' pointing='left'>
          That name is taken!
        </Label> */}
        </Form.Field>
      <br />
      <br />
      <Button
        type="submit"
        onSubmit = { this.onSubmit }
        variant="outlined"
        className="register__button"
        // label="Send"
        basic color='red'>
          REGISTER
        </Button>
    </Form>
        {/* <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
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
        // label="Send"
        basic color='red'>
          REGISTER
        </Button>
        </form>
        </MuiThemeProvider> */}
      </div>
    );
  }
}

export default withRouter(SignUpForm);
