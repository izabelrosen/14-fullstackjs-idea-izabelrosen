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
  constructor(props) {
    super(props);

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

    const user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };

    if (user) {
      this.props.registerUser(user);
      this.setState({
        username: '',
        email: '',
        password: '',
      });
    }
    console.log(user);
  }


  render() {
    // const { user } = this.props.auth;

    return (
      <div className='signup'>
      <h1>SIGN UP</h1>
      {/* <h3>{user ? user.username : null}</h3> */}
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

SignUpForm.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

// Adds the auth state inside a property
// state.auth comes from root reducer
// use it: this.props.auth
const mapStateToProps = state => ({
  auth: state.auth,
});

// Object with register user so its possible to map
export default connect(mapStateToProps, { registerUser })(SignUpForm);
