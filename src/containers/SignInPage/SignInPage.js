import React, {useState} from 'react';
import {connect} from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Formik } from 'formik';
import * as Yup from 'yup';

import AppFooter from '../../components/AppFooter';
import SignInForm from './SignInForm';
import Toast from '../../components/Toast';
import { usersActions } from '../../store/actions';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const validationSchema = Yup.object().shape({
  email: Yup.string('Enter your email').required('Email is required'),
  password: Yup.string('').min(1, 'Password must contain at least 8 characters').required('Password is required')
})

function SignInPage(props) {
  const classes = useStyles();

  const [toastConfig, setToastConfig] = useState({});

  const handleSubmit = async (values, formikBag) => {
    try {
      await props.handleUserSignIn(values);
    } catch(e) {
      setToastConfig({open: true, message: e.message});
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Formik 
          render={props => <SignInForm {...props} />} 
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        />
      </div>
      <Box mt={8}>
        <AppFooter />
      </Box>
      <Toast
        {...toastConfig}
      />
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleUserSignIn: user => dispatch(usersActions.handleUserSignIn(user))
  }
}

export default connect(null, mapDispatchToProps)(SignInPage);