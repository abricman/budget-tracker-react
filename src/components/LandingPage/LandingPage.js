import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import AppFooter from '../AppFooter/AppFooter';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  }
}));

const NewAccountLink = React.forwardRef((props, ref) => (
    <Link innerRef={ref} to="/account/new" {...props} />
));

const AccountLoginLink = React.forwardRef((props, ref) => (
    <Link innerRef={ref} to="/account/login" {...props} />
));


function LandingPage() {
  const classes = useStyles();

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Box flexGrow="0" paddingTop={10}>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Welcome!
        </Typography>
        <Typography variant="body1" align="center">
          {'The only budget tracker you will ever need'}
        </Typography>
      </Box>
      <Box flexGrow="1" alignSelf="center" paddingTop={10}>
        <Button variant="contained" color="primary" className={classes.button} component={NewAccountLink}>
            New Account
        </Button>
        <Button variant="contained" color="primary" className={classes.button} component={AccountLoginLink}>
            Login
        </Button>
      </Box>
      <Box flexGrow="0">
        <AppFooter />
      </Box>
    </Box>
  );
}

export default LandingPage;