import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  }
}))

export default function SignUpForm(props) {
  const classes = useStyles()

  const {
    values : { firstName, lastName, email, password, confirmPassword},
    errors,
    touched,
    handleSubmit,
    handleChange,
    isValid
  } = props;

  return (
    <>
    <form className={classes.form} noValidate onSubmit={handleSubmit}>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
        <TextField
            autoComplete="fname"
            name="firstName"
            variant="outlined"
            required
            fullWidth
            id="firstName"
            label="First Name"
            autoFocus
            helperText={touched.name ? errors.name : ''}
            error={touched.name && Boolean(errors.name)}
            onChange={handleChange}
            value={firstName}
            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
            variant="outlined"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="lname"
            helperText={touched.name ? errors.name : ''}
            error={touched.name && Boolean(errors.name)}
            onChange={handleChange}
            value={lastName}
            />
        </Grid>
        <Grid item xs={12}>
            <TextField
            variant="outlined"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            helperText={touched.name ? errors.name : ''}
            error={touched.name && Boolean(errors.name)}
            onChange={handleChange}
            value={email}
            />
        </Grid>
        <Grid item xs={12}>
            <TextField
            variant="outlined"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            helperText={touched.name ? errors.name : ''}
            error={touched.name && Boolean(errors.name)}
            onChange={handleChange}
            value={password}
            />
        </Grid>
        <Grid item xs={12}>
            <TextField
            variant="outlined"
            required
            fullWidth
            name="passwordConfirmation"
            label="Confirm Password"
            type="password"
            id="passwordConfirmation"
            autoComplete="password-confirmation"
            helperText={touched.name ? errors.name : ''}
            error={touched.name && Boolean(errors.name)}
            onChange={handleChange}
            value={confirmPassword}
            />
        </Grid>
        </Grid>
        <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        disabled={!isValid}
        >
        Sign Up
        </Button>
        <Grid container justify="flex-end">
        <Grid item>
            <Link href="#" variant="body2">
            Already have an account? Sign in
            </Link>
        </Grid>
        </Grid>
    </form>
  </>
  );
}