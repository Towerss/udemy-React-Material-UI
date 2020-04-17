import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './ui/Header';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './ui/Theme';

function App() {
  // console.log(JSON.stringify(theme, null, 2))
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={() => <div>Home</div>} />
          <Route exact path='/services' component={() => <div>Services</div>} />
          <Route exact path='/customsoftware' component={() => <div>Custome Software</div>} />
          <Route exact path='/mobileapps' component={() => <div>Mobile Apps</div>} />
          <Route exact path='/websites' component={() => <div>Websites</div>} />
          <Route exact path='/revolution' component={() => <div>The Revolution</div>} />
          <Route exact path='/about' component={() => <div>About Us</div>} />
          <Route exact path='/contact' component={() => <div>Contact Us</div>} />
          <Route exact path='/estimate' component={() => <div>Estimate</div>} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
