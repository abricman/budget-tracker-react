import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import AppHeader from  '../../components/AppHeader';
import AppNavigation from  '../../components/AppNavigation/AppNavigation';
import AppFooter from  '../../components/AppFooter/AppFooter'
import AppMenu from  '../../components/AppMenu/AppMenu'
import { usersActions } from '../../store/actions';

const defaultTheme = createMuiTheme();
const AppHeaderWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    justifyContent: "center",
    flexGrow: 1,
    paddingLeft: AppHeaderWidth,
  }
}));

const Home = ({auth, handleUserSignOut}) => {
  const classes = useStyles();

  const [state, setState] = useState({ menuOpen: false })
  const handleMenuClick = () => setState({menuOpen: !state.menuOpen})
  const handleSignOut = () => handleUserSignOut(auth.user)
  const updateOpenState = (menuOpen) => setState({menuOpen})

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
      />
      <Container component="main" className={classes.main} maxWidth="sm">
        <AppNavigation/>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Welcome!
        </Typography>
        <Typography variant="body1" align="center">
          {'The only budget tracker you will ever need'}
        </Typography>
      </Container>
      <AppFooter />
    </div>
  );
}

const mapStateToProps = ({auth}) => {
  return { auth }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleUserSignOut: user => dispatch(usersActions.handleUserSignOut(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);