import React, {Component} from 'react';
import Header from './Header';
import {cyan500} from 'material-ui/styles/colors';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Home from '.././Views/Site/Home';
import SignIn from '../Views/Site/SignIn';
import SignUp from '../Views/Site/SignUp'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
  appBar: {
    height: 50,
  },
});

// MuiThemeProvider takes the theme as a property and passed it down the hierarchy.
// const App = () => (
//   <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
//   <div className="App">
//     <Header />
//       <h1>PRATTLE</h1>
//       <p>A simple way to connect with your friends! PSST! All secretly...</p>
//     </div>
//   </MuiThemeProvider>
// );

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Header />
          <div className="container">
          <ul>
             <li><Link to="/">Hello Home</Link></li>
             <li><Link to="/signin">Sign In</Link></li>
             <li><Link to="/signup">Sign Up</Link></li>
          </ul>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
          </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;