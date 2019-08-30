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
import _ from 'lodash';

import AppFooter from '../AppFooter/AppFooter';
import SignUpForm from './SingUpForm';
import Toast from '../Toast/Toast';
import { userSignUp } from '../../actions';

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
  }
}))

const validationSchema = Yup.object().shape({
  firstName: Yup.string('Enter first name').required('First name is required'),
  lastName: Yup.string('Enter last name').required('Last name is required'),
  email: Yup.string('Enter your email').required('Email is required'),
  password: Yup.string('').min(1, 'Password must contain at least 8 characters').required('Password is required'),
  passwordConfirmation: Yup.string('').min(1, 'Password confirmation must contain at least 8 characters').required('Password confirmation is required').oneOf([Yup.ref('password'), 'Password does not maatch'])
})

function SignUpPage(props) {
  const classes = useStyles()
  const [toastConfig, setToastConfig] = useState({});

  const handleSubmit = async (values, formikBag) => {
    const user = _.omit(values, ['passwordConfirmation'])
    try {
      await props.userSignUp(user);
    } catch(e) {
      debugger;
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
          Sign up
        </Typography>
        <Formik 
          render={props => <SignUpForm {...props} />} 
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        />
      </div>
      <Box mt={5}>
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
    userSignUp: user => dispatch(userSignUp(user))
  }
}

export default connect(null, mapDispatchToProps)(SignUpPage);