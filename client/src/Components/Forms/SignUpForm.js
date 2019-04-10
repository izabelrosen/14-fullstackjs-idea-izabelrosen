import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../App';
import { withRouter } from 'react-router-dom';
import {
  Button, Form, TextArea,
} from 'semantic-ui-react';
import { registerUser } from '../../Actions/auth';

/*  eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */
class SignUpForm extends Component {
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
    this.props.registerUser(newUser);
  }


  render() {
    return (
      <div className='signup'>
      <h1>SIGN UP</h1>
      <Form onSubmit = { this.handleSubmit }>
        <Form.Field inline>
          <input
            type='text'
            placeholder='Username'
            name='username'
            onChange = { this.onChange}
            value = { this.state.username}
          />
        </Form.Field>
        <Form.Field inline>
          <input
            type = 'email'
            name = 'email'
            placeholder = 'Email'
            onChange = { this.onChange}
            value = { this.state.email}
          />
        </Form.Field>
        <Form.Field inline>
          <input
            type = 'password'
            name = 'password'
            placeholder = 'Password'
            onChange = { this.onChange}
            value = { this.state.password}
          />
        </Form.Field>
        <br />
        <br />
        <Button
          type = 'submit'
          onSubmit = { this.onSubmit }
          variant = 'outlined'
          className = 'register__button'
          basic color = 'red'>
            REGISTER
        </Button>
      </Form>
      </div>
    );
  }
}

// SignUpForm.propTypes = {

// }

export default connect(null, { registerUser })(SignUpForm);
// export default withRouter(SignUpForm);
