import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppHome from  '../AppHome/AppHome';
import LoginPage from  '../LoginPage/LoginPage'
import NewAccountPage from  '../NewAccountPage/NewAccountPage'
import LandingPage from  '../LandingPage/LandingPage'

function App() {
  return (
    <Router>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/account/login' component={LoginPage} />
      <Route exact path='/account/new' component={NewAccountPage} />
      <Route exact path='/home' component={AppHome} />
    </Router>
  );
}

export default App;