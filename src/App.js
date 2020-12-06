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
import Home from './main/Home';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Admin from './main/Admin';
import LoginForm from './main/LoginForm';
import { signIn } from './Login/auth';
import AuthRoute from './Login/AuthRoute';
import LogoutButton from './Login/LogoutButton';
import Hotel from './main/Hotel';
import Facilities from './main/Facilities';
import Tour from './main/Tour';
import Restaurants from './main/Restaurants';
import Room_Introduce from './main/Room_Introduce';

const styles = theme => ({
  root : {
    width : '110%',
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
      user : null,
      toggle : false,
      
    }
  }

  

  handleDrawerToggle = () => this.setState({toggle : !this.state.toggle})

  handleLogin = ({email, password}) => this.setState({ user : signIn({ email, password }) })


  handleLogout = () => {
    this.setState({user : null })
  }

  render(){
    const { classes } = this.props;

    const authenticated = this.state.user != null;

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
            배에힘꽉조 호텔
          </Typography>
        </Toolbar>
        <Drawer open={this.state.toggle}>
          <MenuItem onClick={this.handleDrawerToggle}>
            <Link component={RouterLink} to="/">
              홈
            </Link>
          </MenuItem>
          <MenuItem onClick={this.handleDrawerToggle}>
            <Link component={RouterLink} to="/hotel">
              호텔 소개
            </Link>
          </MenuItem>
          <MenuItem onClick={this.handleDrawerToggle}>
            <Link component={RouterLink} to="/facilites">
              시설 소개
            </Link>
          </MenuItem>
          <MenuItem onClick={this.handleDrawerToggle}>
            <Link component={RouterLink} to="/room_introduce">
              객실 소개
            </Link>
          </MenuItem>
          <MenuItem onClick={this.handleDrawerToggle}>
            <Link component={RouterLink} to="/tour">
              주변 시설/관광지
            </Link>
          </MenuItem>
          <MenuItem onClick={this.handleDrawerToggle}>
            <Link component={RouterLink} to="/restaurants">
              호텔 내 식당
            </Link>
          </MenuItem>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <MenuItem onClick={this.handleDrawerToggle}>
            <Link component={RouterLink} to="/admin_page">
              관리자 페이지
            </Link>
          </MenuItem>
          <MenuItem onClick={this.handleDrawerToggle}>
            {authenticated ? (
              <LogoutButton logout={this.handleLogout} />
            ) : (
            <Link component={RouterLink} to="/admin_login">
              관리자 로그인
            </Link>
            )}
          </MenuItem>
        </Drawer>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/hotel" component={Hotel}/>
          <Route exact path="/facilites" component={Facilities}/>
          <Route exact path="/room_introduce" component={Room_Introduce}/>
          <Route exact path="/tour" component={Tour}/>
          <Route exact path="/restaurants" component={Restaurants}/>
          <AuthRoute exact authenticated={authenticated} path="/admin_page" render={props => <Admin user={this.state.user} {...props} />}/>
          <Route exact path="/admin_login" render={props => (
              <LoginForm authenticated={authenticated} login={this.handleLogin} {...props} />
            )}/>
        </div>
        </AppBar>
        </Router>
      </div>
    );
  }
}

export default withStyles(styles)(App);