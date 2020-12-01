import React from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Staff from './Staff';
import Reservation from './Reservation';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { Toolbar } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const roots = {
  root : {
    width : '100%',
    flexGrow: 1,
    minWidth : 1080
  }
}

const styles1 = {
  left : '500px',
  width : '8%',
  marginLeft : 1100,
  //marginBottom : 15,
  display : 'flex',
  justifyContent : 'center'
}

const styles2 = {
  left : '500px',
  width : '9%',
  marginLeft : 10,
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
    <AppBar position="static" color="default">
    <Toolbar>
        <Typography flexGrow = "1" display = "none" variant="h6" noWrap>
            관리자 기능
        </Typography>
        <div style={styles1}>
        <Link to="/staff">
          <Button variant="contained" color="default">직원 관리</Button>
        </Link>
        </div>
        <div style={styles2}>
        <Link to="/reservation">
          <Button variant="contained" color="default">예약현황 및 관리</Button>
        </Link>
        </div>
    </Toolbar>
    </AppBar>
    </div>
      <main>
        <Switch>
          <Route exact path="/staff" component={Staff} />
          <Route exact path="/reservation" component={Reservation} />
        </Switch>
      </main>
    </Router>
    </Card>
  );
}

export default Admin;