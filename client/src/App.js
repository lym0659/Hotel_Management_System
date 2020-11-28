import './App.css';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { fade } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Staff from './components/Staff';
import Reservation from './components/Reservation';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const styles = theme => ({
  root : {
    width : '100%',
    flexGrow: 1,
    minWidth : 1080
  },
  menu : {
    marginTop : 15,
    marginBottom : 15,
    display : 'flex',
    justifyContent : 'center'
  },
  paper : {
    marginLeft : 18,
    marginRight : 18
  },
  progress : {
    margin : theme.spacing(2)
  },
  tableHead : {
    fontSize : '0.76rem'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },

});

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      toggle : false
    }
  }

  handleDrawerToggle = () => this.setState({toggle : !this.state.toggle})

  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Router>
        <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={this.handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            호텔 예약관리 시스템
          </Typography>
        </Toolbar>
        <Drawer open={this.state.toggle}>
          <MenuItem onClick={this.handleDrawerToggle}>
            <Link component={RouterLink} to="/">
              Home
            </Link>
          </MenuItem>
          <MenuItem onClick={this.handleDrawerToggle}>
            <Link component={RouterLink} to="/staff">
              Staff
            </Link>
          </MenuItem>
          <MenuItem onClick={this.handleDrawerToggle}>
            <Link component={RouterLink} to="/reservation">
              Reservation
            </Link>
          </MenuItem>
        </Drawer>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/staff" component={Staff}/>
          <Route exact path="/reservation" component={Reservation}/>
        </div>
        </AppBar>
        </Router>
      </div>
    );
  }
}

export default withStyles(styles)(App);