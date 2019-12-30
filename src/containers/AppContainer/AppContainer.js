import React, { useState } from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { makeStyles, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'

import AppHeader from  '../../components/AppHeader'
import AppNavigation from  '../../components/AppNavigation'
import AppFooter from  '../../components/AppFooter'
import AppMenu from  '../../components/AppMenu'
import { usersActions } from '../../store/actions'

const defaultTheme = createMuiTheme();
const AppHeaderWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#e7e7e7'
  }/* ,
  main: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    justifyContent: "center",
    flexGrow: 1,
    marginLeft: AppHeaderWidth,
  } */
}));

const AppContainer = ({auth, handleUserSignOut, renderHeader, renderMain, navigateToSignInPage, handleNavigation}) => {
  /* if (!auth.user || !auth.token) navigateToSignInPage(); */

  const classes = useStyles();
  const [state, setState] = useState({ menuOpen: false })
  const handleMenuClick = () => setState({menuOpen: !state.menuOpen})
  const updateOpenState = (menuOpen) => setState({menuOpen})
  const handleSignOut = () => handleUserSignOut(auth.user)

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppHeader
        title="Budget Tracker" 
        zIndex={defaultTheme.zIndex.drawer+1}
        open={state.menuOpen}
        updateOpenState={updateOpenState} 
        handleMenuClick={handleMenuClick} 
        handleSignOut={handleSignOut}
        renderAppMenu={(open, updateOpenState, handleSignOut) => (
          <AppMenu open={open} updateOpenState={updateOpenState} handleSignOut={handleSignOut} />
        )}
        renderHeader={renderHeader}
      />
      <AppNavigation handleNavigation={handleNavigation}/>
      <Grid container style={{flex:1}}>
        <Grid item style={{width:"240px"}}></Grid>
        <Grid item style={{flexGrow:"1"}}>
          {renderMain()}
        </Grid>
      </Grid>
      <AppFooter />
    </div>
  )
}

const mapStateToProps = ({auth}) => {
  return { auth }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleUserSignOut: user => dispatch(usersActions.handleUserSignOut(user)),
    navigateToSignInPage: () => dispatch(push('/user/signin')),
    handleNavigation: (url) => () => dispatch(push(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)