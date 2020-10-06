import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {startDeleteEmployees} from '../../actions/employeesAction'
import {findDepartments} from '../../selectors/departmentSelectors'


class EmployeesList extends React.Component{

    

    handleRemove=(id)=>{
        const confirmRemove = window.confirm("Are you sure")
        if(confirmRemove){
            this.props.dispatch(startDeleteEmployees(id))
        }
    }

    render(){
        return(
            <div>
                <h1>Employees List- {this.props.employees.length}</h1>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Departments</th>
                            <th>Actions</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>       
                    {
                        this.props.employees.map((employees)=>{
                        const department = findDepartments(this.props.departments, employees.department)
                            return(
                                <tr>
                                   <td>{employees._id}</td>
                                   <td>{employees.name}</td>
                                   <td>{employees.email}</td>
                                   <td>{employees.mobile}</td>
                                   <td>{department ? department.name : ''}</td>
                                   <td><button>Show</button></td>
                                   <td><button onClick={()=>{
                                       this.handleRemove(employees._id)
                                   }}>Remove</button></td>
                                </tr>
                            )
                            })
                    }
                    </tbody>
                </table>
                
                <Link to="/employees/new">Add Employees</Link>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        departments: state.departments,
        employees: state.employees
}
}

export default connect(mapStateToProps)(EmployeesList)
