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

class R_Revise extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            reserve_number : '',
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
            reserve_number : '',
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
        const url = '/api/reservations';
        const formData = new FormData();
        if(this.state.revise_element === "객실번호"){
            this.state.revise_element = "room_number";
        }
        else if(this.state.revise_element === "숙박인원"){
            this.state.revise_element = "number_of_members";
        }
        else if(this.state.revise_element === "결제여부"){
            this.state.revise_element = "payment_status";
        }
        else if(this.state.revise_element === "픽업여부"){
            this.state.revise_element = "pick_up";
        }
        else if(this.state.revise_element === "취소여부"){
            this.state.revise_element = "cancel_status";
        }
        formData.append('reserve_number', this.state.reserve_number);
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
            reserve_number : '',
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
                    예약정보 수정
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>정보 수정</DialogTitle>
                    <DialogContent>
                        <TextField label="예약번호" input type="text" name="reserve_number" value={this.state.reserve_number} onChange={this.handleValueChange}/><br/>
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

export default withStyles(styles)(R_Revise);