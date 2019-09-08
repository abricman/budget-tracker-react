import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

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
    justifyItems: "center",
    justifySelf: "center",
    flexGrow: 1
  }
}));

const PageNotFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom align="center">
          {'Page not found'}
        </Typography>
        <Typography variant="body1" align="center">
          {'Go back or navigate to the home page'}
        </Typography>
      </Container>
    </div>
  );
}

export default PageNotFound;