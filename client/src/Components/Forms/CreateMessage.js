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
    // this.createMessage = this.createMessage.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log('Send button triggered');

    const message = {
      message: this.state.message,
    };
    fetch('http://localhost:3003/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(message),
    })
      .then(res => res.json())
      .then(data => console.log(data));
  }

  createMessage() {
  }

  render() {
    // const messages = [];

    return (
      <div className="createMessage__form">
        <h1>Write a message</h1>
        <form onSubmit={this.onSubmit}>
        <TextField
        id="standard-textarea"
        name="message"
        onChange = { this.onChange }
        value = { this.state.message }
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
        // onClick={this.createMessage}
        onSubmit={this.onSubmit}
        >Send</Button>
        </form>
      </div>
    );
  }
}

export default withRouter(CreateMessage);
