import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../App';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

/*  eslint class-methods-use-this: ["error", { "exceptMethods": ["createMessage"] }] */
export class CreateMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
    };
    this.createMessage = this.createMessage.bind(this);
  }

  createMessage() {
    console.log('Send button triggered');
  }

  render() {
    // const messages = [];

    return (
      <div className="createMessage__form">
        <h1>Write a message</h1>
        <TextField
        id="standard-textarea"
        placeholder="Message"
        multiline
        margin="normal"
        />

        <Button variant="outlined"
        className="createMessage__send-button"
        label="Send" primary={true}
        onClick={this.createMessage}>Send</Button>

      </div>
    );
  }
}

export default withRouter(CreateMessage);
