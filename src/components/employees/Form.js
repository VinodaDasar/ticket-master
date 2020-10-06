import React from 'react'
import {connect} from 'react-redux'
import {startGetAddEmployees} from '../../actions/employeesAction'


class EmployeesForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name: '',
            email: '',
            mobile: '',
            department: ''
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handleDepartmentChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }


    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile,
            department: this.state.department
        }
        const redirect = ()=>{
            return this.props.history.push('/employees')
        }
        console.log(formData)
        this.props.dispatch(startGetAddEmployees(formData, redirect))
    }


    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/><br/>

                    <label>Email</label>
                    <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/><br/>

                    <label>Mobile</label>
                    <input type="text" name="mobile" value={this.state.mobile} onChange={this.handleChange}/><br/>

                    <label htmlFor="department">Department</label>
                    <select value={this.state.department} onChange={this.handleDepartmentChange} name="department">
                    <option value="">select</option>
                    {
                        this.props.departments.map((department)=>{
                            return <option value={department._id} key={department._id}>{department.name}</option>
                        })
                    }

                    </select><br/>

                    <input type="submit" name="submit"/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        departments: state.departments
    }
}

export default connect(mapStateToProps)(EmployeesForm)