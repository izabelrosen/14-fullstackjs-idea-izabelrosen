import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../../Components/App';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export class MyChatForm extends Component {
  render() {
    return (
      <div className="myChatForm">
        <h1>MY CHAT</h1>
        <TextField
        id="standard-textarea"
        placeholder="Message"
        multiline
        margin="normal"
        />

        <Button variant="contained" color="primary">
        Send
        {/* <Icon className="icon">ICON GOES HERE</Icon> */}
        </Button>
      </div>
    )
  }
}

export default withRouter(MyChatForm);