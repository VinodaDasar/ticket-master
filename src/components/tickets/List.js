import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { startGetTickets, startDeleteTickets } from '../../actions/ticketsAction'
import {findCustomer} from '../../selectors/customersSelectors'
import {findDepartments} from '../../selectors/departmentSelectors'
import {selectEmpName} from '../../selectors/employeesSelectors'


class TicketsList extends React.Component{

    componentDidMount(){
       this.props.dispatch(startGetTickets())
    }

    handleDelete = (id)=>{
        const confirmRemove = window.confirm("Are You Sure?")
        if(confirmRemove){
            this.props.dispatch(startDeleteTickets(id))
        }
    }

    render(){
        console.log(this.props.tickets)
        return(
            <div>
                <h1>Tickets - {this.props.tickets.length}</h1>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Code No</th>
                            <th>Customer</th>
                            <th>Department</th>
                            <th>Employees</th>
                            <th>Priority</th>
                            <th>Message</th>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.tickets.map((ticket)=>{
                            const customer = findCustomer(this.props.customers, ticket.customer)
                            const department = findDepartments(this.props.departments, ticket.department)
                            const employeeName = selectEmpName(this.props.employees, ticket.employees.map(emp => emp.employee))
                            return(
                                <tr key={ticket._id}>
                                    <td>{ticket.code}</td>
                                    <td>{customer ? customer.name : ''}</td>
                                    <td>{department ? department.name : ''}</td>
                                    <td>{employeeName.join(', ')}</td>
                                    <td>{ticket.priority}</td>
                                    <td>{ticket.message}</td>
                                    <td><button onClick={()=>{
                                        this.handleDelete(ticket._id)
                                    }}>Remove</button><button><Link to={`tickets/edit/${ticket._id}`}>Edit</Link></button></td>
                                    
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
                <Link to="/tickets/new">Add ticket</Link>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
return{
    customers: state.customers,
    tickets: state.tickets,
    employees: state.employees,
    departments :state.departments

}
}

export default connect(mapStateToProps)(TicketsList)