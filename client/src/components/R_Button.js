import React from 'react';
import { put } from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    hidden : {
        display : 'none'
    },
    root : {
        width : '92%',
        flexGrow: 1,
        minWidth : 1080
    },
      menu : {
        width : '8%',
        marginTop : 15,
        marginBottom : 15,
        display : 'flex',
        justifyContent : 'center'
    }
})

class R_Button extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            guest_mail : '',
            guest_name : '',
            payment_info :  '',
            guest_phone_number : '',
            guest_mail_R : '',
            room_number : '',
            number_of_members : '',
            check_in : '',
            check_out : '',
            pick_up : '',
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        this.addCustomer()
            .then((response) => {
                console.log(response.data);
            })
        this.setState({
            guest_mail_R : this.state.guest_mail,
            guest_mail : '',
            guest_name : '',
            payment_info :  '',
            guest_phone_number : '',
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
        formData.append('guest_mail', this.state.guest_mail);
        formData.append('guest_name', this.state.guest_name);
        formData.append('payment_info', this.state.payment_info);
        formData.append('guest_phone_number', this.state.guest_phone_number);
        const config = {
            headers : {
                'content-type' : 'multipart/form-data'
            }
        }
        return put(url, formData, config);
        

    }

    handleFormSubmit1 = (e) => {
        e.preventDefault()
        this.addCustomer1()
            .then((response) => {
                console.log(response.data);
            })
        this.setState({
            guest_mail_R : '',
            room_number : '',
            number_of_members : '',
            check_in : '',
            check_out : '',
            pick_up : '',
        })
    }

    addCustomer1 = () => {
        const url = '/api/reservations';
        const formData = new FormData();
        formData.append('guest_mail_R', this.state.guest_mail_R);
        formData.append('room_number', this.state.room_number);
        formData.append('number_of_members', this.state.number_of_members);
        formData.append('check_in', this.state.check_in);
        formData.append('check_out', this.state.check_out);
        formData.append('pick_up', this.state.pick_up);
        const config = {
            headers : {
                'content-type' : 'multipart/form-data'
            }
        }
        return put(url, formData, config);

    }

    render(){
        const { classes } = this.props;
        return (
            <div>
                <TextField label="고객 이메일" input type="text" name="guest_mail" value={this.state.guest_mail} onChange={this.handleValueChange}/><br/>
                <TextField label="고객 성명" input type="text" name="guest_name" value={this.state.guest_name} onChange={this.handleValueChange}/><br/>
                <TextField label="카드번호" input type="text" name="payment_info" value={this.state.payment_info} onChange={this.handleValueChange}/><br/>
                <TextField label="고객 전화번호" input type="text" name="guest_phone_number" value={this.state.guest_phone_number} onChange={this.handleValueChange}/><br/>
                

                <TextField label="객실번호" input type="text" name="room_number" value={this.state.room_number} onChange={this.handleValueChange}/><br/>
                <TextField label="숙박인원" input type="text" name="number_of_members" value={this.state.number_of_members} onChange={this.handleValueChange}/><br/>
                <TextField label="체크인" input type="text" name="check_in" value={this.state.check_in} onChange={this.handleValueChange}/><br/>
                <TextField label="체크아웃" input type="text" name="check_out" value={this.state.check_out} onChange={this.handleValueChange}/><br/>
                <TextField label="픽업 여부" input type="text" name="pick_up" value={this.state.pick_up} onChange={this.handleValueChange}/><br/>
                <Button variant="contained" color="inherit" onClick={this.handleFormSubmit1}><Button variant="contained" color="primary" onClick={this.handleFormSubmit}>입력완료</Button></Button>
            </div>
        )
    }
}

export default withStyles(styles)(R_Button);