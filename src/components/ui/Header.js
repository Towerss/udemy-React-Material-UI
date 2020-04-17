import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


/**
 * My imports
 */
import logo from '../../assets/logo.svg';


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
    ...theme.mixins.toolbar,
    marginBottom: '3em'
  },
  logo:{
    height: '8em'
  },
  logoContainer:{
    padding: 0,
    "&:hover":{
      backgroundcolor: 'transparent'
    }
  },
  tabsContainer:{
    marginLeft: 'auto'
  },
  tab:{
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
  },
  button:{
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginLeft: '50px',
    marginRight: '25px',
    height: "45px"
  }
}));



const Header = (props) => {

  const classes = useStyles();
  const [value, setValue] =useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (window.location.pathname === '/' && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === '/services' && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === '/revolution' && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === '/about' && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === '/contact' && value !== 4) {
      setValue(4);
    } else if (window.location.pathname === '/estimate' && value !== 5) {
      setValue(5);
    }
  }, [value]);

//   <Typography variant="h4">
//   Material UI
// </Typography>

    return (
      <Fragment>
        <ElevationScroll {...props}>
            <AppBar position="fixed" color={"primary"}>
                <ToolBar disableGutters> 
                  <Button component={Link} to='/' className={classes.logoContainer} onClick={() => setValue(0)} disableRipple>
                    <img alt='' className={classes.logo} src={logo} />
                  </Button>
                  <Tabs value={value} onChange={handleChange} className={classes.tabsContainer} indicatorColor={'primary'}>
                    <Tab className={classes.tab} label='Home' component={Link} to='/' />
                    <Tab className={classes.tab} label='Services' component={Link} to='/services' />
                    <Tab className={classes.tab} label='The revolution' component={Link} to='/revolution' />
                    <Tab className={classes.tab} label='About Us' component={Link} to='/about' />
                    <Tab className={classes.tab} label='Contact Us' component={Link} to='/contact' />
                  </Tabs>
                  <Button className={classes.button} variant='contained' color={'secondary'} component={Link} to='/estimate'>Free Estimate</Button>
                </ToolBar>
            </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin} />
      </Fragment>
    )
}

export default Header;
