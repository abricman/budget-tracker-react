import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SingInForm(props) {
    const classes = useStyles();

    const {
        values : { email, password},
        errors,
        touched,
        handleSubmit,
        handleChange,
        isValid
      } = props;

    return (
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            helperText={touched.name ? errors.name : ''}
            error={touched.name && Boolean(errors.name)}
            onChange={handleChange}
            value={email}
            />
            <TextField
            variant="outlined"
            margin="normal"
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
            {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
            /> */}
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={!isValid}
            >
            Sign In
            </Button>
            <Grid container>
            <Grid item xs>
                <Link href="#" variant="body2">
                Forgot password?
                </Link>
            </Grid>
            <Grid item>
                <Link href="/user/signup" variant="body2">
                {"Don't have an account? Sign Up"}
                </Link>
            </Grid>
            </Grid>
        </form>
    );
}