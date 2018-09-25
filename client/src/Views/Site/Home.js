import React, { Component } from 'react';
import '../../Components/App.css';
import Button from '@material-ui/core/Button';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <h1>THIS IS HOME</h1>

        <Button variant="outlined" 
          href="/signin"
          color="primary">
           SIGN IN
        </Button>

        <Button variant="outlined"
          href="/signup" 
          color="secondary">
           SIGN UP
        </Button>

        </MuiThemeProvider>
      </div>
    );
  }
}