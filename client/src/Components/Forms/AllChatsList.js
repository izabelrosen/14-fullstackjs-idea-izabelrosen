import React, { Component } from 'react';
import '../App';
import { withRouter } from 'react-router-dom';
// import TextField from 'material-ui/TextField';
// import RaisedButton from 'material-ui/RaisedButton';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';

/*  eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */
export class AllChatsList extends Component {
  render() {
    return (
      <div className="allchatslist">
      <h1>ALL MY CHATS</h1>

      <Avatar>OP</Avatar>
      <p>Chat message goes here, next to avatar. </p>

    </div>
    );
  }
}

export default withRouter(AllChatsList);
