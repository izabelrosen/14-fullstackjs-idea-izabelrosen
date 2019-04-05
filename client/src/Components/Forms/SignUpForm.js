import React, { Component } from 'react';
import '../App';
import { withRouter } from 'react-router-dom';
import {
  Button, Form,
} from 'semantic-ui-react';

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
      </div>
    );
  }
}

export default withRouter(SignUpForm);
