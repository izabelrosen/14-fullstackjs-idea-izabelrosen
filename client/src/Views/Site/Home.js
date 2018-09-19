import React, { Component } from 'react';
import '../../Components/App.css';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <h1>THIS IS HOME</h1>
            <RaisedButton href="/signin" className="home__signin--button" label="Sign in" primary={true} />
            <RaisedButton href="/signup" className="home__signup--button" label="Sign up" secondary={true} />
        </MuiThemeProvider>
      </div>
    );
  }
}