import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = (zIndex = "auto") => {
  return makeStyles(theme => ({
    root: {
      zIndex
    }, 
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    contentContainer: {
      flexGrow: 1
    }
  }))();
};

const Header = ({ title, zIndex, open, updateOpenState, handleMenuClick, handleSignOut, renderAppMenu, renderHeader }) => {
    const classes = useStyles(zIndex);

    return (
      <>
        {renderAppMenu(open, updateOpenState, handleSignOut)}
        <AppBar position="sticky" classes={{root: classes.root}}>
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleMenuClick}>
                  <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title} style={{flexGrow:0}}>
                  {title}
              </Typography>
              <div className={classes.contentContainer}>
                {renderHeader ? renderHeader() : null}
              </div>
            </Toolbar>
        </AppBar>
     </>
    );
}

export default Header;