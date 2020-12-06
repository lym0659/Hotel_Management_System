import React from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { Toolbar } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import R_Button from '../components/R_Button';
import Home_Room from '../components/Home_Room';

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
  marginLeft : 1100,
  display : 'flex',
  justifyContent : 'center'
}

const styles = {
  width : '8%',
  //marginBottom : 15,
  display : 'flex',
  justifyContent : 'center'
}

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            startDate : null,
            endDate : null,
        }
    }

    render() {
        return (
        <Card>
            <Router>
            <div style={roots}>
            <AppBar style={styles1} position="static" color="default">
            <Toolbar >
                <Typography flexGrow = "1" display = "none" variant="h6" noWrap>
                    배에힘꽉조 호텔
                </Typography>
                <div style={styles2}>
                <Link to="/reserve">
                  <br/>
                <Button variant="contained" color="default">예약하기</Button>
                </Link>
                </div>
                <div style={styles}>
                <Link to="/home_room">
                  <br/>
                <Button variant="contained" color="default">객실정보 확인하기</Button>
                </Link>
                </div>
            </Toolbar>
            </AppBar>
            </div>
            <main>
                <Switch>
                <Route exact path="/reserve" component={R_Button} />
                <Route exact path="/home_room" component={Home_Room} />
                </Switch>
            </main>
            </Router>
        </Card>
        )
    }
}

export default Home;