import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import StaffDelete from './StaffDelete';


class Staff_Show extends React.Component{
    render() {
        return (
            <TableRow>
                <TableCell><img src={this.props.image} alt="profile"/></TableCell>
                <TableCell>{this.props.staff_id}</TableCell>
                <TableCell>{this.props.staff_name}</TableCell>
                <TableCell>{this.props.staff_role}</TableCell>
                <TableCell>{this.props.staff_area}</TableCell>
                <TableCell>{this.props.staff_address}</TableCell>
                <TableCell>{this.props.staff_mail}</TableCell>
                <TableCell>{this.props.staff_phone_number}</TableCell>
                <TableCell>{this.props.staff_salary}</TableCell>
                <TableCell>{this.props.staff_account}</TableCell>
                <TableCell>{this.props.staff_memo}</TableCell>
                <TableCell><StaffDelete stateRefresh={this.props.stateRefresh} staff_id={this.props.staff_id}/></TableCell>
            </TableRow>
        )
    }
}

export default Staff_Show;