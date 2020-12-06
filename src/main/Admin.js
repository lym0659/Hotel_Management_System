import React from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Staff from './Staff';
import Reservation from './Reservation';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { Toolbar } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Guest from './Guest';
import Room from './Room';
import Service from './Service';
import Facility from './Facility';

const roots = {
  root : {
    width : '100%',
    flexGrow: 1,
    minWidth : 1080
  }
}

const styles1 = {
  left : '10px',
  width : '120%',
  //marginBottom : 15,
  display : 'flex',
  justifyContent : 'center'
}

const styles2 = {
  width : '5%',
  marginLeft : 120,
  display : 'flex',
  justifyContent : 'center'
}

const styles = {
  width : '6.6%',
  //marginBottom : 15,
  display : 'flex',
  justifyContent : 'center'
}


function Admin({ user , props}) {
  const { email, password, name } = user || {};
  return (
    <Card>
    <Router>
    <div style={roots}>
    <AppBar style={styles1} position="static" color="default">
    <Toolbar >
        <Typography flexGrow = "1" display = "none" variant="h6" noWrap>
            관리자 기능
        </Typography>
        <div style={styles2}>
        <Link to="/guest">
          <Button variant="contained" color="default">고객 관리</Button>
        </Link>
        </div>
        <div style={styles}>
        <Link to="/staff">
          <Button variant="contained" color="default">직원 관리</Button>
        </Link>
        </div>
        <div style={styles}>
        <Link to="/reservation">
          <Button variant="contained" color="default">예약현황 및 관리</Button>
        </Link>
        </div>
        <div style={styles}>
        <Link to="/room">
          <Button variant="contained" color="default">객실 관리</Button>
        </Link>
        </div>
        <div style={styles}>
        <Link to="/service">
          <Button variant="contained" color="default">룸 서비스 관리</Button>
        </Link>
        </div>
        <div style={styles}>
        <Link to="/facility">
          <Button variant="contained" color="default">시설 관리</Button>
        </Link>
        </div>
        <div style={styles}>
        <Link to="/staff">
          <Button variant="contained" color="default">픽업 관리</Button>
        </Link>
        </div>
        <div style={styles}>
        <Link to="/staff">
          <Button variant="contained" color="default">주차 관리</Button>
        </Link>
        </div>
        <div style={styles}>
        <Link to="/staff">
          <Button variant="contained" color="default">재고 관리</Button>
        </Link>
        </div>
        <div style={styles}>
        <Link to="/staff">
          <Button variant="contained" color="default">청소 관리</Button>
        </Link>
        </div>
    </Toolbar>
    </AppBar>
    </div>
      <main>
        <Switch>
          <Route exact path="/facility" component={Facility} />
          <Route exact path="/service" component={Service} />
          <Route exact path="/room" component={Room} />
          <Route exact path="/guest" component={Guest} />
          <Route exact path="/staff" component={Staff} />
          <Route exact path="/reservation" component={Reservation} />
        </Switch>
      </main>
    </Router>
    </Card>
  );
}

export default Admin;