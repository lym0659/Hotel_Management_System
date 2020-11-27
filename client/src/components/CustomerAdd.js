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

class CustomerAdd extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            reserve_number : '',
            guest_id : '',
            room_number :  '',
            number_of_members : '',
            check_in : '',
            check_out : '',
            payment_status : '',
            pick_up : '',
            cancel_status : '',
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
            guest_id : '',
            room_number :  '',
            number_of_members : '',
            check_in : '',
            check_out : '',
            payment_status : '',
            pick_up : '',
            cancel_status : '',
            open : false
        })
    }

    /*handleFileChange = (e) => {
        this.setState({
            file : e.target.files[0],
            fileName : e.target.value
        })
    }*/

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    addCustomer = () => {
        const url = '/api/reservations';
        const formData = new FormData();
        formData.append('reserve_number', this.state.reserve_number)
        formData.append('guest_id', this.state.guest_id);
        formData.append('room_number', this.state.room_number);
        formData.append('number_of_members', this.state.number_of_members);
        formData.append('check_in', this.state.check_in);
        formData.append('check_out', this.state.check_out);
        formData.append('payment_status', this.state.payment_status);
        formData.append('pick_up', this.state.pick_up);
        formData.append('cancel_status', this.state.cancel_status);
        const config = {
            headers : {
                'content-type' : 'text/plain'
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
            guest_id : '',
            room_number :  '',
            number_of_members : '',
            check_in : '',
            check_out : '',
            payment_status : '',
            pick_up : '',
            cancel_status : '',
            open : false
        })
    }

    render(){
        return (
            <div>
                <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
                    예약 추가하기
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>예약 추가</DialogTitle>
                    <DialogContent>
                        <TextField label="예약번호" input type="text" name="reserve_number" value={this.state.reserve_number} onChange={this.handleValueChange}/><br/>
                        <TextField label="고객번호" input type="text" name="guest_id" value={this.state.guest_id} onChange={this.handleValueChange}/><br/>
                        <TextField label="객실번호" input type="text" name="room_number" value={this.state.room_number} onChange={this.handleValueChange}/><br/>
                        <TextField label="숙박인원" input type="text" name="number_of_members" value={this.state.number_of_members} onChange={this.handleValueChange}/><br/>
                        <TextField label="예상 체크인" input type="text" name="check_in" value={this.state.check_in} onChange={this.handleValueChange}/><br/>
                        <TextField label="예상 체크아웃" input type="text" name="check_out" value={this.state.check_out} onChange={this.handleValueChange}/><br/>
                        <TextField label="결제여부" input type="text" name="payment_status" value={this.state.payment_status} onChange={this.handleValueChange}/><br/>
                        <TextField label="픽업여부" input type="text" name="pick_up" value={this.state.pick_up} onChange={this.handleValueChange}/><br/>
                        <TextField label="취소여부" input type="text" name="cancel_status" value={this.state.cancel_status} onChange={this.handleValueChange}/><br/>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={this.handleFormSubmit}>추가</Button>
                        <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button> 
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles)(CustomerAdd);