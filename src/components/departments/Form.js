import React from 'react'
import {connect} from 'react-redux'
import {startGetAddDepartments} from '../../actions/departmentsAction'

class DepartmentsForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name: ''
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const formdata = {
            name: this.state.name
        }
        const redirect = ()=>{
        return this.props.history.push('/departments')
        }
        //console.log(formdata)
        this.props.dispatch(startGetAddDepartments(formdata, redirect))
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label></label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/><br/>

                    <input type="submit"/>
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

export default connect(mapStateToProps)(DepartmentsForm)