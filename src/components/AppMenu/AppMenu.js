import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import CategoryIcon from '@material-ui/icons/Category';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
  },
  section1: {
    margin: theme.spacing(3, 2)
  }
}));

export default function TemporaryDrawer({open, updateOpenState}) {
  const classes = useStyles();

  const toggleDrawer = (open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    updateOpenState(open);
  };

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
        </Grid>
      </div>
      <Divider />
      <List>
        <ListItem button key="My Account">
          <ListItemIcon><AccountBoxIcon /></ListItemIcon>
          <ListItemText primary="My Account" secondary="" />
        </ListItem>
        <ListItem button key="My Wallets">
          <ListItemIcon><AccountBalanceWalletIcon /></ListItemIcon>
          <ListItemText primary="My Wallets" />
        </ListItem>
        <ListItem button key="Categories">
          <ListItemIcon><CategoryIcon /></ListItemIcon>
          <ListItemText primary="Categories" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {sideList()}
      </Drawer>
    </div>
  );
}