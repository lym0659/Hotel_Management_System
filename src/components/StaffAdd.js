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

class StaffAdd extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            file : null,
            staff_id : '',
            staff_name : '',
            staff_role :  '',
            staff_area : '',
            staff_address : '',
            staff_mail : '',
            staff_phone_number : '',
            staff_salary : '',
            staff_account : '',
            staff_memo : '',
            fileName : '',
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
            file : null,
            staff_id : '',
            staff_name : '',
            staff_role :  '',
            staff_area : '',
            staff_address : '',
            staff_mail : '',
            staff_phone_number : '',
            staff_salary : '',
            staff_account : '',
            staff_memo : '',
            fileName : '',
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
        const url = '/api/staffs';
        const formData = new FormData();
        formData.append('image', this.state.file)
        formData.append('staff_id', this.state.staff_id)
        formData.append('staff_name', this.state.staff_name);
        formData.append('staff_role', this.state.staff_role);
        formData.append('staff_area', this.state.staff_area);
        formData.append('staff_address', this.state.staff_address);
        formData.append('staff_mail', this.state.staff_mail);
        formData.append('staff_phone_number', this.state.staff_phone_number);
        formData.append('staff_salary', this.state.staff_salary);
        formData.append('staff_account', this.state.staff_account);
        formData.append('staff_memo', this.state.staff_memo);
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
            file : null,
            staff_id : '',
            staff_name : '',
            staff_role :  '',
            staff_area : '',
            staff_address : '',
            staff_mail : '',
            staff_phone_number : '',
            staff_salary : '',
            staff_account : '',
            staff_memo : '',
            fileName : '',
            open : false
        })
    }

    render(){
        const { classes } = this.props;
        return (
            <div>
                <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
                    직원 추가하기
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>직원 추가</DialogTitle>
                    <DialogContent>
                        <input className={classes.hidden} accept="image/*" id="raised-button-file" type = "file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange}/><br/>
                        <label htmlFor="raised-button-file">
                            <Button variant="contained" color="primary" component="span" name="file">
                                {this.state.fileName === "" ? "프로필 이미지 선택" : this.state.fileName}
                            </Button>
                        </label>
                        <br/>
                        <TextField label="직원 아이디" input type="text" name="staff_id" value={this.state.staff_id} onChange={this.handleValueChange}/><br/>
                        <TextField label="직원 이름" input type="text" name="staff_name" value={this.state.staff_name} onChange={this.handleValueChange}/><br/>
                        <TextField label="담당부서" input type="text" name="staff_role" value={this.state.staff_role} onChange={this.handleValueChange}/><br/>
                        <TextField label="담당구역" input type="text" name="staff_area" value={this.state.staff_staff_area} onChange={this.handleValueChange}/><br/>
                        <TextField label="직원 주소" input type="text" name="staff_address" value={this.state.staff_address} onChange={this.handleValueChange}/><br/>
                        <TextField label="직원 이메일" input type="text" name="staff_mail" value={this.state.staff_mail} onChange={this.handleValueChange}/><br/>
                        <TextField label="직원 전화번호" input type="text" name="staff_phone_number" value={this.state.staff_phone_number} onChange={this.handleValueChange}/><br/>
                        <TextField label="봉급" input type="text" name="staff_salary" value={this.state.staff_salary} onChange={this.handleValueChange}/><br/>
                        <TextField label="계좌번호" input type="text" name="staff_account" value={this.state.staff_account} onChange={this.handleValueChange}/><br/>
                        <TextField label="특이사항" input type="text" name="staff_memo" value={this.state.staff_memo} onChange={this.handleValueChange}/><br/>
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

export default withStyles(styles)(StaffAdd);