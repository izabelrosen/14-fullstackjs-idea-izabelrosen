import React, { Component } from 'react';
// import {cyan500} from 'material-ui/styles/colors';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
// const muiTheme = getMuiTheme({
//   palette: {
//     textColor: cyan500,
//   },
//   appBar: {
//     height: 50,
//   },
// });

// MuiThemeProvider takes the theme as a property and passed it down the hierarchy.

/*  eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */

export default class Header extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <AppBar title="Prattle" />
    </MuiThemeProvider>
    );
  }
}
