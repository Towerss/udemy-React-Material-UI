import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';


function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
};


const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar
  }
}));



const Header = (props) => {

  const classes = useStyles();

    return (
      <Fragment>
        <ElevationScroll {...props}>
            <AppBar position="fixed" color={"primary"}>
                <ToolBar> 
                  <Typography variant="h4">
                      Material UI
                  </Typography>
                </ToolBar>
            </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin} />
      </Fragment>
    )
}

export default Header;
