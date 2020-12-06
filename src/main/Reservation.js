import R_Show from '../components/R_Show'
import Check_in from '../components/Check_in';
import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Card from '@material-ui/core/Card';
import R_Revise from '../components/R_Revise';


const styles = theme => ({
  root : {
    width : '92%',
    flexGrow: 1,
    minWidth : 1080
  },
  menu : {
    width : '11%',
    marginTop : 15,
    marginBottom : 15,
    display : 'flex',
    justifyContent : 'center'
  },
  progress : {
    margin : theme.spacing(2)
  },
  tableHead : {
    fontSize : '1.0rem'
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

class Reservation extends Component{

  constructor(props){
    super(props);
    this.state = {
      reservations : '',
      completed : 0,
      searchKeyword : '',
    }
  }

  stateRefresh = () => {
    this.setState({
      reservations : '',
      completed : 0,
      searchKeyword : ''
    });
    this.callApi()
      .then(res => this.setState({reservations : res}))
      .catch(err => console.log(err));
  }

  componentDidMount(){
    this.timer = setInterval(this.progress, 20);
    this.callApi()
      .then(res => this.setState({reservations : res}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/reservations');
    const body = await response.json();
    return body;
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({completed : completed >= 100 ? 0 : completed + 1});
  }

  handleValueChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  render(){
    const filteredComponents = (data) => {
      data = data.filter((c) => {
        return c.guest_name.indexOf(this.state.searchKeyword) > -1;
      });
      return data.map((c) => {
        return <R_Show stateRefresh={this.stateRefresh} key={c.reserve_number} reserve_number={c.reserve_number} guest_mail={c.guest_mail} guest_name={c.guest_name}
        room_number={c.room_number} number_of_members={c.number_of_members} check_in={c.check_in} check_out={c.check_out} real_check_in={c.real_check_in}
        real_check_out={c.real_check_out} payment_status={c.payment_status} pick_up={c.pick_up} cancel_status={c.cancel_status}/>
      });
    }
    const { classes } = this.props;
    const cellList = ["예약번호", "고객 이메일", "고객성명", "객실번호", "숙박인원", "예정 체크인", "예정 체크아웃", "실제 체크인", "실제 체크아웃", "결제여부", "픽업여부", "취소여부", "설정"];
    return (
      <Card>
        <div className={classes.root}>
          <AppBar position="static" color="s">
            <Toolbar>
              <Typography className={classes.title} variant="h6" noWrap>
                예약 현황 및 관리
              </Typography>
              <div className={classes.menu}>
                <Check_in stateRefresh={this.stateRefresh}/>
              </div>
              <div className={classes.menu}>
                <R_Revise stateRefresh={this.stateRefresh}/>
              </div>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon/>
                </div>
                <InputBase
                  placeholder="예약검색"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  name="searchKeyword"
                  value={this.state.searchKeyword}
                  onChange={this.handleValueChange}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
            </Toolbar>
          </AppBar>
          <Card>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  {cellList.map(c => {
                    return <TableCell className={classes.tableHead}>{c}</TableCell>
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                { this.state.reservations ? 
                filteredComponents(this.state.reservations) :  
                <TableRow>
                  <TableCell colSpan="12" align="center">
                    <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed}/>
                  </TableCell>
                </TableRow>
                }
              </TableBody>
            </Table>
          </Card>
        </div>
      </Card>
    );
  }
}

export default withStyles(styles)(Reservation);