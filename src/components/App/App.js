import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import history from '../../history';

import AppHome from  '../AppHome/AppHome';
import LandingPage from  '../LandingPage/LandingPage';
import SignUpPage from  '../SignUpPage/SignUpPage'
import SignInPage from  '../SignInPage/SignInPage'

function App() {
  return (
    <Router history={history}>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/user/signup' component={SignUpPage} />
      <Route exact path='/user/signin' component={SignInPage} />
      <Route exact path='/home' component={AppHome} />
    </Router>
  );
}

export default connect(null)(App);