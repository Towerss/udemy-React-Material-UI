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
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


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
    marginBottom: '3em',
    [theme.breakpoints.down('md') ]: {
      marginBottom: '2em'
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.25em'
    }
  },
  logo:{
    height: '8em',
    [theme.breakpoints.down('md') ]: {
      height: '7em'
    },
    [theme.breakpoints.down('xs')]: {
      height: '5.5em'
    }
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
  },
  menu:{
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    borderRadius: '0px'
  },
  menuItem:{
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover":{
      opacity: 1,
      backgroundcolor: 'transparent'
    }
  },
  drawer:{
    backgroundColor: theme.palette.common.blue
  },
  drawerIcon:{
    height: '50px',
    width: '50px'
  },
  drawerIconContainer:{
    marginLeft: 'auto',
    '&:hover':{
      backgroundColor: 'transparent'
    }
  },
  drawerItem:{
    ...theme.typography.tab,
    color: 'white'
  },
  drawerItemEstimate:{
    backgroundColor: '#ad1457'//theme.palette.common.orange
  }
}));



/**
 * Component main function
 */  
const Header = (props) => {

  //  Variable to access the custom styles for this component
  const classes = useStyles();

  //  To load the ,aterial UI theme in variable to use it with Javascript
  const theme = useTheme();

  //  This is the reference to return true for any screen less than 'md'
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  // Optimal usability on iOS
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);


  /**
   * Hooks Section
   */

  // State to handle drawer menu
  const [openDrawer, setOpenDrawer] = useState(false); 
  
  //  State to hadle selected tab
  const [value, setValue] =useState(0);

  //  State to hadle dropdown button menu
  const [anchorEl, setAnchorEl] = useState(null);

  //  Variable to handle visibility of the dropdown menu
  const [openMenu, setOpenMenu] = useState(false);

  //  
  const [selectedIndex, setSelectedIndex] = useState(0);



  //  function to handle tab selected
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //  function to hadle dropdown menu item selected
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);         //  gets the current clicked component and passes the reference to the state, so the menu "knows" where to render
    setOpenMenu(true);        //  then opens the menu anchored to the passed on component
  };

  //  handle closing the dropdown menu  
  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleMenuItemClick = (event, index) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(index);
  }


  const menuOptions = [
    {name:'Services', link:'/services'},
    {name:'Custom Software', link:'/customsoftware'},
    {name:'Mobile App Development', link:'/mobileapps'},
    {name:'Website Development', link:'/websites'},
  ]


  //  hook to set the index of the current tab depending on the current url
  useEffect(() => {
    // if (window.location.pathname === '/' && value !== 0) {
    //   setValue(0);
    // } else if (window.location.pathname === '/services' && value !== 1) {
    //   setValue(1);
    // } else if (window.location.pathname === '/revolution' && value !== 2) {
    //   setValue(2);
    // } else if (window.location.pathname === '/about' && value !== 3) {
    //   setValue(3);
    // } else if (window.location.pathname === '/contact' && value !== 4) {
    //   setValue(4);
    // } else if (window.location.pathname === '/estimate' && value !== 5) {
    //   setValue(5);
    // }

    switch(window.location.pathname){
      case '/':
        if (value !== 0) {
          setValue(0);
        }
        break;
      case '/services':
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(0);
        }
        break;
      case '/customsoftware':
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(1);
        }
        break;
      case '/mobileapps':
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(2);
        }
        break;
      case '/websites':
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(3);
        }
        break;
      case '/revolution':
        if (value !== 2) {
          setValue(2);
        }
        break;
      case '/about':
        if (value !== 3) {
          setValue(3);
        }
        break;
      case '/contact':
        if (value !== 4) {
          setValue(4);
        }
        break;
      case '/estimate':
        if (value !== 5) {
          setValue(5);
        }
        break;
      default:
        break;
    }

  }, [value]);

//   <Typography variant="h4">
//   Material UI
// </Typography>

  const tabs = (
    <Fragment>
      <Tabs value={value} onChange={handleChange} className={classes.tabsContainer} indicatorColor={'primary'}>
        <Tab className={classes.tab} label='Home' component={Link} to='/' />
        <Tab 
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup={anchorEl ? 'true' : undefined}
          onMouseOver={(e) => handleClick(e)}
          className={classes.tab} 
          label='Services' 
          component={Link} 
          to='/services' 
        />
        <Tab className={classes.tab} label='The revolution' component={Link} to='/revolution' />
        <Tab className={classes.tab} label='About Us' component={Link} to='/about' />
        <Tab className={classes.tab} label='Contact Us' component={Link} to='/contact' />
      </Tabs>
      <Button className={classes.button} variant='contained' color={'secondary'} component={Link} to='/estimate'>Free Estimate</Button>
      <Menu 
        classes={{paper: classes.menu}} 
        id='simple-menu' 
        anchorEl={anchorEl} 
        open={openMenu} 
        onClose={handleClose} 
        MenuListProps={{onMouseLeave: handleClose}}
        elevation={0}
      >
        {menuOptions.map((option, index) => (
          <MenuItem 
            key={option.name} 
            component={Link} 
            to={option.link} 
            classes={{root: classes.menuItem}} 
            onClick={
              (event) => {
                handleMenuItemClick(event,index); 
                setValue(1);
                handleClose();
              }
            }
            selected={ index === selectedIndex && value === 1}
            > 
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </Fragment>
  );


  //  Drawer
  const drawer = (
    <Fragment>
      <SwipeableDrawer 
        disableBackdropTransition={!iOS} 
        disableDiscovery={iOS} 
        open={openDrawer} 
        onClose={() => setOpenDrawer(false)} 
        onOpen={() => setOpenDrawer(true)}
        classes={{paper: classes.drawer}}
        >
        <List disablePadding>
          <ListItem divider button onClick={() => {setOpenDrawer(false); setValue(0);}} component={Link} to='/' >
            <ListItemText className={classes.drawerItem} selected={value === 0} disableTypography>Home</ListItemText>
          </ListItem>
          <ListItem divider button onClick={() => {setOpenDrawer(false); setValue(1);}} component={Link} to='/services' >
            <ListItemText className={classes.drawerItem} selected={value === 1} disableTypography>Services</ListItemText>
          </ListItem>
          <ListItem divider button onClick={() => {setOpenDrawer(false); setValue(2);}} component={Link} to='/revolution' >
            <ListItemText className={classes.drawerItem} selected={value === 2} disableTypography>The Revolution</ListItemText>
          </ListItem>
          <ListItem divider button onClick={() => {setOpenDrawer(false); setValue(3);}} component={Link} to='/about' >
            <ListItemText className={classes.drawerItem} selected={value === 3} disableTypography>About Us</ListItemText>
          </ListItem>
          <ListItem divider button onClick={() => {setOpenDrawer(false); setValue(4); console.log(value);}} component={Link} to='/contact' >
            <ListItemText className={classes.drawerItem} selected={value === 4} disableTypography>Contact Us</ListItemText>
          </ListItem>
          <ListItem className={classes.drawerItemEstimate} divider button onClick={() => {setOpenDrawer(false); setValue(5); console.log(value);}} component={Link} to='/estimate' >
            <ListItemText className={classes.drawerItem} selected={value === 5} disableTypography>Free Estimate</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </Fragment>
  );


    return (
      <Fragment>
        <ElevationScroll {...props}>
            <AppBar position="fixed" color={"primary"}>
                <ToolBar disableGutters> 
                  <Button component={Link} to='/' className={classes.logoContainer} onClick={() => setValue(0)} disableRipple>
                    <img alt='' className={classes.logo} src={logo} />
                  </Button>
                  {matches ? drawer : tabs}
                </ToolBar>
            </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin} />
      </Fragment>
    )
}

export default Header;
