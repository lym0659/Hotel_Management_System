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

class Room_Revise extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            room_number : '',
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
            room_number : '',
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
        const url = '/api/rooms';
        const formData = new FormData();
        if(this.state.revise_element === "예약여부"){
            this.state.revise_element = "reserve_status";
        }
        else if(this.state.revise_element === "객실 가격"){
            this.state.revise_element = "room_price";
        }
        else if(this.state.revise_element === "수용인원"){
            this.state.revise_element = "room_capacity";
        }
        else if(this.state.revise_element === "침대유형"){
            this.state.revise_element = "room_bed";
        }
        else if(this.state.revise_element === "뷰"){
            this.state.revise_element = "room_view";
        }
        else if(this.state.revise_element === "흡연여부"){
            this.state.revise_element = "room_smoking";
        }
        else if(this.state.revise_element === "손상여부"){
            this.state.revise_element = "room_damaged";
        }
        formData.append('room_number', this.state.room_number);
        formData.append('revise_element', this.state.revise_element);
        formData.append('revise_value', this.state.revise_value);
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
            room_number : '',
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
                    객실정보 수정
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>정보 수정</DialogTitle>
                    <DialogContent>
                        <TextField label="객실 번호" input type="text" name="room_number" value={this.state.room_number} onChange={this.handleValueChange}/><br/>
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

export default withStyles(styles)(Room_Revise);