// import React, { Component } from 'react';
// import './App.css';
// import RaisedButton from 'material-ui/RaisedButton';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


// class App extends Component {

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//           <MuiThemeProvider>
//             <RaisedButton label="Default" />

//           </MuiThemeProvider>
//         </p>
//       </div>
//     );
//   }
// }

// export default App;

// import React from 'react';
// import Home from './Views/Site/Home';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';

// const App = () => (
//   <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
//     <Home />
//   </MuiThemeProvider>
// );

// export default App;

import React from 'react';
import Home from './Views/Site/Home';
import {cyan500} from 'material-ui/styles/colors';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
  appBar: {
    height: 50,
  },
});

// MuiThemeProvider takes the theme as a property and passed it down the hierarchy.
const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <AppBar title="My AppBar" />
    <Home />
  </MuiThemeProvider>
);

export default App;