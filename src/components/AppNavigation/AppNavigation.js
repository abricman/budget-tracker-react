import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import HelpIcon from '@material-ui/icons/Help';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ShowChartIcon from '@material-ui/icons/ShowChart';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  /* appBar: {
    zIndex: theme.zIndex.drawer + 1,
  }, */
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));

const AppNavigation = () => {
    const classes = useStyles();

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
            >
            <div className={classes.toolbar} />
            <List>
                <ListItem button key="Transactions">
                    <ListItemIcon><AccountBalanceWalletIcon /></ListItemIcon>
                    <ListItemText primary="Transactions" />
                </ListItem>
                <ListItem button key="Report">
                    <ListItemIcon><ShowChartIcon /></ListItemIcon>
                    <ListItemText primary="Report" />
                </ListItem>
                <ListItem button key="Budget">
                    <ListItemIcon><AccountBalanceIcon /></ListItemIcon>
                    <ListItemText primary="Budget" />
                </ListItem>
            </List>
            
            <Divider />

            <List>
                <ListItem button key="Help">
                    <ListItemIcon><HelpIcon /></ListItemIcon>
                    <ListItemText primary="Help" />
                </ListItem>
            </List>
        </Drawer>
    );
}

export default AppNavigation;