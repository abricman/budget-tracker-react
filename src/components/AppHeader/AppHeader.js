import React, {useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import AppMenu from '../AppMenu/AppMenu';

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
  }))();
};

const Header = props => {
    const classes = useStyles(props.zIndex);
    debugger;
    const [state, setState] = useState({
      open: false
    });

    const onMenuClick = () => {
      setState({open: !state.open});  
    }

    const updateOpenState = (open) => {
      setState({open});  
    }

    return (
      <>
        <AppMenu open={state.open} updateOpenState={updateOpenState} />
        <AppBar position="static" classes={{root: classes.root}}>
            <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={onMenuClick}>
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
                {props.title}
            </Typography>
            </Toolbar>
        </AppBar>
     </>
    );
}

export default Header;