import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

class RestaurantInfo extends Component {
    constructor(props) {
        super(props);
        this.state ={
          open: false
        }
      }
      handleClickOpen = () => {
        this.setState({
            open: true
        })
      }

      handleClickClose = () => {
        this.setState({
            open: false
        })
      }
    render() {
        return(
            <div>
            <Button 
                variant="contained" 
                color="primary" 
                onClick={this.handleClickOpen}>
                    {this.props.title}
                </Button>
                <Dialog 
                open={this.state.open} 
                onClose={this.handleClickClose}>
                    <DialogTitle>{this.props.name}</DialogTitle>
                    <DialogContent><img src={this.props.photo} alt="profile"/></DialogContent>
                    <DialogContentText>
                    {this.props.content}
                    </DialogContentText>
                    <DialogActions>
                    <Button
                    variant="outlined"
                    color="primary" 
                    onClick={this.handleClickClose}>
                    닫기</Button>
                    </DialogActions>
                </Dialog>
                </div>
        );
    }
}

export default RestaurantInfo;