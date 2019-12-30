import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import AppContainer from '../../containers/AppContainer'
import { navigateToURL } from '../../lib/Helpers'

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
  },
  socialIcon: {
    cursor: "pointer"
  }
}));

const AboutPage = () => {
  const classes = useStyles();

  return (
    <AppContainer renderHeader={() => null}
        renderMain={() => (
          <>
            <Container component="main" className={classes.main} maxWidth="sm">
              <Typography component="h1" variant="h4" gutterBottom align="center">
                {'Hi! Thank you visiting :)'}
              </Typography>
              <Typography component="p" variant="body1" align="justify">
                <p>{'My name is Andrej Bricman and I am a web development enthusiast based in Ljubljana, Slovenia.'}</p>
              </Typography>
              <Typography component="p" variant="body1" align="justify">
                <p>{'You can find out more about me on my social profiles below. Feel free to reach out and connect.'}</p>
              </Typography>
              <Grid container justify="space-evenly">
                <Grid item>
                  <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" color="#1da1f2" className={classes.socialIcon} onClick={navigateToURL('https://twitter.com/andrej_bricman')}/>
                </Grid>
                <Grid item>
                  <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" color="#0073b1" className={classes.socialIcon} onClick={navigateToURL('https://www.linkedin.com/in/andrej-bricman-76a6aa19a/')}/>
                </Grid>
                <Grid item>
                  <FontAwesomeIcon icon={["fab", "github"]} size="2x" className={classes.socialIcon} onClick={navigateToURL('https://github.com/abricman')}/>
                </Grid>
              </Grid>
            </Container>
          </>
        )}
    />
  );
}

export default AboutPage