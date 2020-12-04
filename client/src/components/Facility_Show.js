import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Facility_Show extends React.Component{
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.facility_name}</TableCell>
                <TableCell>{this.props.staff_id}</TableCell>
                <TableCell>{this.props.repair_status}</TableCell>
                <TableCell>{this.props.facility_price}</TableCell>
                <TableCell>{this.props.facility_capacity}</TableCell>
                <TableCell>{this.props.facility_opening_hour}</TableCell>
            </TableRow>
        )
    }
}

export default Facility_Show;