import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';

import LandingPage from  '../../components/LandingPage'
import SignUpPage from  '../SignUpPage'
import SignInPage from  '../SignInPage'
import PageNotFound from  '../../components/PageNotFound'
import TransactionsPage from '../TransactionsPage'
import AboutPage from '../../components/AboutPage'
import WalletsPage from '../../containers/WalletsPage'
import FontAwesomeIconLibrary from '../../lib/FontAwesomeIconLibrary'

function App({history, context}) {
  return (
    <>
      <ConnectedRouter history={history} context={context}>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/user/signup' component={SignUpPage} />
          <Route exact path='/user/signin' component={SignInPage} />
          <Route exact path='/home' component={TransactionsPage} />
          <Route exact path='/about' component={AboutPage} />
          <Route exact path='/wallets' component={WalletsPage} />
          <Route component={PageNotFound} />  
        </Switch>
      </ConnectedRouter>
    </>
  );
}

export default connect(null)(App);