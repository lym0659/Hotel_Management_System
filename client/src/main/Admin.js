import React from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Staff from './Staff';
import Reservation from './Reservation';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { Toolbar } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

function Admin({ user }) {
  const { email, password, name } = user || {};
  return (
    <Card>
    <Router>
    <div>
    <AppBar position="static" color="default">
    <Toolbar>
        <Typography variant="h6" noWrap>
            관리자 기능
        </Typography>
        <div>
        <Link to="/staff">
          <Button variant="contained" color="default">직원 관리</Button>
        </Link>
        </div>
        <div>
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