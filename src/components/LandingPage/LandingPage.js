import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
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

const AccountSignUpLink = React.forwardRef((props, ref) => (
    <Link innerRef={ref} to="/user/signup" {...props} />
));

const AccountSignInLink = React.forwardRef((props, ref) => (
    <Link innerRef={ref} to="/user/signin" {...props} />
));

function LandingPage({ auth, push }) {
  const classes = useStyles();

  if (auth.user && auth.token) push('/home')
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Box flexGrow="0" pt={10}>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Welcome!
        </Typography>
        <Typography variant="body1" align="center">
          {'The only budget tracker you will ever need'}
        </Typography>
      </Box>
      <Box flexGrow="1" alignSelf="center" pt={10}>
        <Button variant="contained" color="primary" className={classes.button} component={AccountSignUpLink}>
            Sign up
        </Button>
        <Button variant="contained" color="primary" className={classes.button} component={AccountSignInLink}>
            Login
        </Button>
      </Box>
      <Box flexGrow="0">
        <AppFooter />
      </Box>
    </Box>
  );
}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(mapStateToProps, { push })(LandingPage);