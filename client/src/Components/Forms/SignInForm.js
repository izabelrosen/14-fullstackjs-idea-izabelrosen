import React, { Component } from 'react';
import '../App';
import TextField from 'material-ui/TextField';
import {
  Button, Form, Label,
} from 'semantic-ui-react';
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
      <Form onSubmit = { this.handleSubmit }>
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
        className="signin__button"
        basic color='red'>
        SIGN IN
        </Button>
      </Form>

        {/* <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
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
        className="register__button"
        basic color='red'>
          LOG IN
        </Button>
        </form>
        </MuiThemeProvider> */}
      </div>
    );
  }
}

export default withRouter(SignInForm);
