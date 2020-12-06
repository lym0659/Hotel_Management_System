import React from 'react';
import { put } from 'axios';
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

class Staff_Memo extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            staff_id : '',
            staff_memo : '',
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
            staff_memo : '',
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
        formData.append('staff_id', this.state.staff_id);
        formData.append('staff_memo', this.state.staff_memo);
        const config = {
            headers : {
                'content-type' : 'multipart/form-data'
            }
        }
        return put(url, formData, config);

    }

    handleClickOpen = () => {
        this.setState({
            open : true
        });
    }

    handleClose = () => {
        this.setState({
            staff_id : '',
            staff_memo : '',
            open : false
        })
    }

    render(){
        const { classes } = this.props;
        return (
            <div>
                <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
                    특이사항 수정
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>특이사항 수정</DialogTitle>
                    <DialogContent>
                        <TextField label="직원 아이디" input type="text" name="staff_id" value={this.state.staff_id} onChange={this.handleValueChange}/><br/>
                        <TextField label="특이사항" input type="text" name="staff_memo" value={this.state.staff_memo} onChange={this.handleValueChange}/><br/>
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

export default withStyles(styles)(Staff_Memo);