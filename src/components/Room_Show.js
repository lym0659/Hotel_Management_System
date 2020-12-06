import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Room_Show extends React.Component{
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.room_number}</TableCell>
                <TableCell>{this.props.reserve_status}</TableCell>
                <TableCell>{this.props.room_price}</TableCell>
                <TableCell>{this.props.room_capacity}</TableCell>
                <TableCell>{this.props.room_bed}</TableCell>
                <TableCell>{this.props.room_view}</TableCell>
                <TableCell>{this.props.room_smoking}</TableCell>
                <TableCell>{this.props.room_damaged}</TableCell>
            </TableRow>
        )
    }
}

export default Room_Show;