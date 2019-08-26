import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import AppHeader from  '../AppHeader/AppHeader';
import AppNavigation from  '../AppNavigation/AppNavigation';
import AppFooter from  '../AppFooter/AppFooter'

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

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppHeader title="Budget Tracker" zIndex={defaultTheme.zIndex.drawer+1} />
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

export default Home;