import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Guest_Delete from './Guest_Delete';


class Guest_Show extends React.Component{
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.guest_mail}</TableCell>
                <TableCell>{this.props.guest_name}</TableCell>
                <TableCell>{this.props.payment_info}</TableCell>
                <TableCell>{this.props.guest_phone_number}</TableCell>
                <TableCell>{this.props.unpaid}</TableCell>
                <TableCell><Guest_Delete stateRefresh={this.props.stateRefresh} guest_mail={this.props.guest_mail}/></TableCell>
            </TableRow>
        )
    }
}

export default Guest_Show;