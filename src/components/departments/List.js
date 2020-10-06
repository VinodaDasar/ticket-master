import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { startDeleteDepartment } from '../../actions/departmentsAction'


class DepartmentsList extends React.Component{

    handleRemove =(id)=>{
       const confirmRemove = window.confirm("Are You Sure")
       if(confirmRemove){
           this.props.dispatch(startDeleteDepartment(id))
       }
    }
    render(){
        return(
            <div>
                <h1>Listing Departments - {this.props.departments.length}</h1>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Departments</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.departments.map((departments)=>{
                                return (
                                    <tr>
                                        <td>{departments.name}</td>
                                        <td><button>Show</button><button onClick={()=>{this.handleRemove(departments._id)}}>Remove</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <Link to="/departments/new">Add Departments</Link>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        departments: state.departments
    }
}

export default connect(mapStateToProps)(DepartmentsList)
