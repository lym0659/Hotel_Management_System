import React from 'react';
import { post } from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    hidden : {
        display : 'none'
    }
})

class Check_in extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            reserve_number : '',
            open : false
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        this.addCustomer()
            .then((response) => {
                console.log(response.data);
                this.props.stateRefresh();
            })
        this.setState({
            reserve_number : '',
            open : false
        })
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    addCustomer = () => {
        const url = '/api/reservations';
        const formData = new FormData();
        formData.append('reserve_number', this.state.reserve_number);
        const config = {
            headers : {
                'content-type' : 'multipart/form-data'
            }
        }
        return post(url, formData, config);

    }

    handleClickOpen = () => {
        this.setState({
            open : true
        });
    }

    handleClose = () => {
        this.setState({
            reserve_number : '',
            open : false
        })
    }

    render(){
        return (
            <div>
                <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
                    체크인 확인
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>체크인</DialogTitle>
                    <DialogContent>
                        <TextField label="예약번호" input type="text" name="reserve_number" value={this.state.reserve_number} onChange={this.handleValueChange}/><br/>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={this.handleFormSubmit}>확인</Button>
                        <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button> 
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles)(Check_in);