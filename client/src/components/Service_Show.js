import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Service_Delete from './Service_Delete';


class Service_Show extends React.Component{
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.service_name}</TableCell>
                <TableCell>{this.props.staff_id}</TableCell>
                <TableCell>{this.props.guest_mail}</TableCell>
                <TableCell>{this.props.room_number}</TableCell>
                <TableCell>{this.props.service_price}</TableCell>
                <TableCell><Service_Delete stateRefresh={this.props.stateRefresh} guest_mail={this.props.guest_mail}/></TableCell>
            </TableRow>
        )
    }
}

export default Service_Show;