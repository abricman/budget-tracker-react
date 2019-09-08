import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';

import AppHome from  '../AppHome/AppHome';
import LandingPage from  '../../components/LandingPage/LandingPage'
import SignUpPage from  '../SignUpPage/SignUpPage'
import SignInPage from  '../SignInPage/SignInPage'
import PageNotFound from  '../../components/PageNotFound/PageNotFound'

function App({history, context}) {
  return (
    <ConnectedRouter history={history} context={context}>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/user/signup' component={SignUpPage} />
        <Route exact path='/user/signin' component={SignInPage} />
        <Route exact path='/home' component={AppHome} />
        <Route component={PageNotFound} />  
      </Switch>
    </ConnectedRouter>
  );
}

export default connect(null)(App);