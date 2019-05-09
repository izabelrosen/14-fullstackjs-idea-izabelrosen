import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import io from 'socket.io-client';
// import { withRouter } from 'react-router-dom';
import '../App';
import { Form, TextArea, Button } from 'semantic-ui-react';
import { newMessage } from '../../Actions/message';

/*  eslint class-methods-use-this: ["error", { "exceptMethods": ["createMessage"] }] */
class CreateMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      socket: '',
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount = () => {
  //   this.initSocket();
  //   const socket = io.connect('http://localhost:3003');
  //   socket.on('connect', () => {
  //     console.log('socket createMessage');
  //   });
  // }

  // initSocket = () => {
  //   const socket = io.connect('http://localhost:3003');
  //   socket.on('connect', () => {
  //     console.log('socket createMessage');
  //   });
  // }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const message = {
      text: this.state.text,
    };
    const socket = io.connect('http://localhost:3003');
    socket.on('connect', () => {
      console.log('socket createMessage');
    });
    socket.emit('chat message', message);
    console.log(message);

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
        <Form onSubmit={this.handleSubmit}>
          <TextArea
          rows={2}
          placeholder="Write a message here..."
          name="text"
          onChange = { this.onChange }
          value = { this.state.text }
          multiline
          margin="normal"
          />

        <Button
        type="submit"
        variant="outlined"
        className="createMessage__send-button"
        onSubmit={this.onSubmit}
        basic color='red'>
        Send</Button>
        </Form>
        </div>
    );
  }
}

CreateMessage.propTypes = {
  newMessage: PropTypes.func.isRequired,
  message: PropTypes.object,
};

export default connect(null, { newMessage })(CreateMessage);
