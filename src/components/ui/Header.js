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
import { useTheme } from '@material-ui/core/styles'


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

  //  State to hadle selected tab
  const [value, setValue] =useState(0);

  //  State to hadle dropdown button menu
  const [anchorEl, setAnchorEl] = useState(null);

  //  Variable to handle visibility of the dropdown menu
  const [open, setOpen] = useState(false);

  //  
  const [selectedIndex, setSelectedIndex] = useState(0);


  //  function to handle tab selected
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //  function to hadle dropdown menu item selected
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);         //  gets the current clicked component and passes the reference to the state, so the menu "knows" where to render
    setOpen(true);        //  then opens the menu anchored to the passed on component
  };

  //  handle closing the dropdown menu  
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handleMenuItemClick = (event, index) => {
    setAnchorEl(null);
    setOpen(false);
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
        open={open} 
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


    return (
      <Fragment>
        <ElevationScroll {...props}>
            <AppBar position="fixed" color={"primary"}>
                <ToolBar disableGutters> 
                  <Button component={Link} to='/' className={classes.logoContainer} onClick={() => setValue(0)} disableRipple>
                    <img alt='' className={classes.logo} src={logo} />
                  </Button>
                  {matches ? null : tabs}
                </ToolBar>
            </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin} />
      </Fragment>
    )
}

export default Header;
