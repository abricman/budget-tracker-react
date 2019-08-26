import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Copyright from '../Copyright/Copyright';

const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    backgroundColor: 'white',
    zIndex: theme.zIndex.drawer + 1,
  },
}));

function AppFooter() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
        <Container maxWidth="sm">
            <Copyright />
        </Container>
    </footer>
  );
}

export default AppFooter;