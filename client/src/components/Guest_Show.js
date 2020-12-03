import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import StaffDelete from './StaffDelete';


class Guest_Show extends React.Component{
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.guest_id}</TableCell>
                <TableCell>{this.props.guest_name}</TableCell>
                <TableCell>{this.props.payment_info}</TableCell>
                <TableCell>{this.props.guest_mail}</TableCell>
                <TableCell>{this.props.guest_phone_number}</TableCell>
                <TableCell>{this.props.unpaid}</TableCell>
                <TableCell><StaffDelete stateRefresh={this.props.stateRefresh} guest_id={this.props.guest_id}/></TableCell>
            </TableRow>
        )
    }
}

export default Guest_Show;