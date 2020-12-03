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

class GuestAdd extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            guest_id : '',
            guest_name : '',
            payment_info :  '',
            guest_mail : '',
            guest_phone_number : '',
            unpaid : '',
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
            guest_id : '',
            guest_name : '',
            payment_info :  '',
            guest_mail : '',
            guest_phone_number : '',
            unpaid : '',
            open : false
        })
    }

    handleFileChange = (e) => {
        this.setState({
            file : e.target.files[0],
            fileName : e.target.value
        })
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    addCustomer = () => {
        const url = '/api/guests';
        const formData = new FormData();
        formData.append('guest_id', this.state.guest_id)
        formData.append('guest_name', this.state.guest_name);
        formData.append('payment_info', this.state.payment_info);
        formData.append('guest_mail', this.state.guest_mail);
        formData.append('guest_phone_number', this.state.guest_phone_number);
        formData.append('unpaid', this.state.unpaid);
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
            guest_id : '',
            guest_name : '',
            payment_info :  '',
            guest_mail : '',
            guest_phone_number : '',
            unpaid : '',
            open : false
        })
    }

    render(){
        const { classes } = this.props;
        return (
            <div>
                <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
                    고객 추가하기
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>고객 추가</DialogTitle>
                    <DialogContent>
                        <TextField label="고객 아이디" input type="text" name="guest_id" value={this.state.guest_id} onChange={this.handleValueChange}/><br/>
                        <TextField label="고객 성명" input type="text" name="guest_name" value={this.state.guest_name} onChange={this.handleValueChange}/><br/>
                        <TextField label="결제정보" input type="text" name="payment_info" value={this.state.payment_info} onChange={this.handleValueChange}/><br/>
                        <TextField label="고객 이메일" input type="text" name="guest_mail" value={this.state.guest_mail} onChange={this.handleValueChange}/><br/>
                        <TextField label="고객 전화번호" input type="text" name="guest_phone_number" value={this.state.guest_phone_number} onChange={this.handleValueChange}/><br/>
                        <TextField label="미결제 정보" input type="text" name="unpaid" value={this.state.unpaid} onChange={this.handleValueChange}/><br/>
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

export default withStyles(styles)(GuestAdd);