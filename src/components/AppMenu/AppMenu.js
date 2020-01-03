import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
  },
  section1: {
    margin: theme.spacing(3, 2)
  }
}))

export default function TemporaryDrawer({open, updateOpenState, handleSignOut}) {
  const classes = useStyles()

  const toggleDrawer = (open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    updateOpenState(open)
  }

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <div className={classes.section1}>
        <Grid container alignItems="center" direction="column">
          <Grid item>
            <Typography gutterBottom variant="h5">
              Andrej Bricman
            </Typography>
          </Grid>
          <Grid item>
            <Typography color="textSecondary" variant="body2">
              andrej.bricman@outlook.com
            </Typography>
          </Grid>
          <Grid item>
            <Link to="/" />
            <Button color="primary" style={{marginTop:"1rem"}} onClick={handleSignOut}>
                Sign out
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  )

  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {sideList()}
      </Drawer>
    </div>
  )
}