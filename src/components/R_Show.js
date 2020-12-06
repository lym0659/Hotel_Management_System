import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import R_Delete from './R_Delete';


class R_Show extends React.Component{
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.reserve_number}</TableCell>
                <TableCell>{this.props.guest_mail}</TableCell>
                <TableCell>{this.props.guest_name}</TableCell>
                <TableCell>{this.props.room_number}</TableCell>
                <TableCell>{this.props.number_of_members}</TableCell>
                <TableCell>{this.props.check_in}</TableCell>
                <TableCell>{this.props.check_out}</TableCell>
                <TableCell>{this.props.real_check_in}</TableCell>
                <TableCell>{this.props.real_check_out}</TableCell>
                <TableCell>{this.props.payment_status}</TableCell>
                <TableCell>{this.props.pick_up}</TableCell>
                <TableCell>{this.props.cancel_status}</TableCell>
                <TableCell><R_Delete stateRefresh={this.props.stateRefresh} reserve_number={this.props.reserve_number}/></TableCell>
            </TableRow>
        )
    }
}

export default R_Show;