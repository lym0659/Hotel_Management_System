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

class ServiceAdd extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            service_name : '',
            staff_id : '',
            guest_mail :  '',
            room_number : '',
            service_price : '',
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
            service_name : '',
            staff_id : '',
            guest_mail :  '',
            room_number : '',
            service_price : '',
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
        const url = '/api/services';
        const formData = new FormData();
        formData.append('service_name', this.state.service_name)
        formData.append('staff_id', this.state.staff_id);
        formData.append('guest_mail', this.state.guest_mail);
        formData.append('room_number', this.state.room_number);
        formData.append('service_price', this.state.service_price);
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
            service_name : '',
            staff_id : '',
            guest_mail :  '',
            room_number : '',
            service_price : '',
            open : false
        })
    }

    render(){
        const { classes } = this.props;
        return (
            <div>
                <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
                    서비스 추가
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>서비스 추가</DialogTitle>
                    <DialogContent>
                        <TextField label="서비스명" input type="text" name="service_name" value={this.state.service_name} onChange={this.handleValueChange}/><br/>
                        <TextField label="담당직원" input type="text" name="staff_id" value={this.state.staff_id} onChange={this.handleValueChange}/><br/>
                        <TextField label="요청고객" input type="text" name="guest_mail" value={this.state.guest_mail} onChange={this.handleValueChange}/><br/>
                        <TextField label="객실번호" input type="text" name="room_number" value={this.state.room_number} onChange={this.handleValueChange}/><br/>
                        <TextField label="서비스 금액" input type="text" name="service_price" value={this.state.service_price} onChange={this.handleValueChange}/><br/>
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

export default withStyles(styles)(ServiceAdd);