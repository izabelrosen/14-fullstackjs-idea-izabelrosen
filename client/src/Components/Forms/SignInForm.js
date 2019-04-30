import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../App';
import {
  Button, Form,
} from 'semantic-ui-react';

import { withRouter } from 'react-router-dom';
import { loginUser } from '../../Actions/auth';

class SignInForm extends Component {
  constructor(props) {
    super(props);

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

    if (user) {
      this.props.loginUser(user, this.props.history);
      this.setState({
        email: '',
        password: '',
      });
    }
    console.log(user);
  }

  render() {
    return (
      <div className = 'signin'>
      <h1>SIGN IN</h1>
      <Form onSubmit = { this.handleSubmit }>
        <Form.Field inline>
          <input
            type = 'email'
            name = 'email'
            placeholder = 'Email'
            onChange = { this.onChange }
            value = { this.state.email }
          />
        </Form.Field>
        <Form.Field inline>
          <input
            type = 'password'
            name = 'password'
            placeholder = 'Password'
            onChange = { this.onChange }
            value = { this.state.password }
          />
        </Form.Field>
        <br />
        <br />
        <Button
          type = 'submit'
          onSubmit = { this.onSubmit }
          variant = 'outlined'
          className = 'signin__button'
          basic color = 'red'>
          SIGN IN
        </Button>
      </Form>
      </div>
    );
  }
}

SignInForm.propTypes = {
  loginUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { loginUser })(withRouter(SignInForm));

// export default withRouter(SignInForm);
// export default connect({ loginUser })(withRouter(SignInForm));
