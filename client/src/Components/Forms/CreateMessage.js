import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import '../App';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { newMessage } from '../../Actions/message';

/*  eslint class-methods-use-this: ["error", { "exceptMethods": ["createMessage"] }] */
class CreateMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const message = {
      text: this.state.text,
    };

    // Clear input field after sending msg
    if (this.state.text) {
      this.props.newMessage(message);
      this.setState({
        text: '',
      });
    }
  }

  render() {
    return (
      <div className="createMessage__form">
        <h1>Write a message</h1>
        <form onSubmit={this.handleSubmit}>
        <TextField
        id="standard-textarea"
        name="text"
        onChange = { this.onChange }
        value = { this.state.text }
        placeholder="Message"
        multiline
        margin="normal"
        />

        <Button
        type="submit"
        variant="outlined"
        className="createMessage__send-button"
        label="Send"
        primary={true}
        onSubmit={this.onSubmit}
        >Send</Button>
        </form>
      </div>
    );
  }
}

CreateMessage.propTypes = {
  newMessage: PropTypes.func.isRequired,
  message: PropTypes.object,
};

export default connect(null, { newMessage })(CreateMessage);
