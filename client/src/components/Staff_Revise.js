import React from 'react';
import { patch } from 'axios';
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

class Staff_Revise extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            staff_id : '',
            revise_element : '',
            revise_value : '',
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
            staff_id : '',
            revise_element : '',
            revise_value : '',
            open : false
        })
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    addCustomer = () => {
        const url = '/api/staffs';
        const formData = new FormData();
        if(this.state.revise_element === "담당부서"){
            this.state.revise_element = "staff_role";
        }
        else if(this.state.revise_element === "담당구역"){
            this.state.revise_element = "staff_area";
        }
        else if(this.state.revise_element === "직원 주소"){
            this.state.revise_element = "staff_address";
        }
        else if(this.state.revise_element === "직원 이메일"){
            this.state.revise_element = "staff_mail";
        }
        else if(this.state.revise_element === "직원 전화번호"){
            this.state.revise_element = "staff_phone_number";
        }
        else if(this.state.revise_element === "봉급"){
            this.state.revise_element = "staff_salary";
        }
        else if(this.state.revise_element === "계좌번호"){
            this.state.revise_element = "staff_account";
        }
        formData.append('staff_id', this.state.staff_id);
        formData.append('revise_element', this.state.revise_element);
        formData.append('revise_value', this.state.revise_value);
        const config = {
            headers : {
                'content-type' : 'multipart/form-data'
            }
        }
        return patch(url, formData, config);

    }

    handleClickOpen = () => {
        this.setState({
            open : true
        });
    }

    handleClose = () => {
        this.setState({
            staff_id : '',
            revise_element : '',
            revise_value : '',
            open : false
        })
    }

    render(){
        const { classes } = this.props;
        return (
            <div>
                <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
                    직원정보 수정
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>정보 수정</DialogTitle>
                    <DialogContent>
                        <TextField label="직원 아이디" input type="text" name="staff_id" value={this.state.staff_id} onChange={this.handleValueChange}/><br/>
                        <TextField label="변경할 속성" input type="text" name="revise_element" value={this.state.revise_element} onChange={this.handleValueChange}/><br/>
                        <TextField label="변경값" input type="text" name="revise_value" value={this.state.revise_value} onChange={this.handleValueChange}/><br/>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={this.handleFormSubmit}>수정</Button>
                        <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button> 
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles)(Staff_Revise);