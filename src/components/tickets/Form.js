import React from 'react'
import Select from 'react-select'
import {connect} from 'react-redux'
import {selectEmployeesByDepartment} from '../../selectors/employeesSelectors'
import { startAddTickets, startEditTickets } from '../../actions/ticketsAction'


class TicketsForm extends React.Component{
    constructor(props){
        console.log('construtor', props)
        super(props)
        this.state={
            code: props.tickets ? props.tickets.code: '',
            customer: props.tickets ? props.tickets.customer: '',
            department: props.tickets ? props.tickets.department: '',
            priority: props.tickets ? props.tickets.priority: '',
            employees: props.tickets ? props.tickets.employees: [],
            priorities: ['high', 'medium', 'low'],
            message:props.tickets ? props.tickets.message: ''
        }
    }


    handleSubmit =(e)=>{
        e.preventDefault()
            //code: this.state.code
            const { code, customer, department, employees, priority, message }= this.state
            const formData = {code, customer, department, priority, message}
            formData.employees = employees.map(emp => ({employees:emp}))
            
            const redirect = ()=>{
                return this.props.history.push('/tickets')
            }

            if(this.props.ticket){
                this.props.dispatch(startEditTickets(formData, this.props.tickets._id, redirect))
            }else{
                this.props.dispatch(startAddTickets(formData, redirect))
                
            }
            

    
    }

    handleChange = (e)=>{
            //console.log(e.target.name, e.target.value)
            this.setState({
                [e.target.name]:e.target.value
            })
    }

    handleDepartmentChange = (e)=>{
        this.setState({
            [e.target.name]:e.target.value,
            employees: []
        })
    }

    handleEmployeeSelection = (e)=>{
            const id = e.target.value
            if(!this.state.employees.includes(id)){
                this.setState((prevState)=>{
                    return{
                        employees: prevState.employees.concat(id)
                    }
                })
            }
    }

    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit}>

            <label htmlFor="code">Code</label>
            <input type="text" 
            name="code" 
            value={this.state.code} 
            onChange={this.handleChange} 
            id="code">
            </input><br/>


            <label>Customer</label>
            <select value={this.state.customer} onChange={this.handleChange} name="customer">
            <option value="">select</option>
            {
              this.props.customers.map((customers=>{
                  return <option key={customers._id} value={customers._id}>{customers.name}</option>
              }))
            }
            </select><br/>


            <label>Department</label>
            <select value={this.state.department} onChange={this.handleDepartmentChange} name="department">
            <option value="">select</option>
            {
                    this.props.departments.map((departments=>{
                        return <option key={departments._id} value={departments._id}>{departments.name}</option>
                    }))
            }
            </select><br/>


            <label htmlFor="employees">Employees</label>
                    <select 
                    value={this.state.employees} 
                    onChange={this.handleEmployeeSelection} 
                    name="employees" 
                    multiple={true}>
                        <option value="">select</option>
                        {selectEmployeesByDepartment(this.props.employees, this.state.department).map((employee) => {
                            return <option value={employee._id} key={employee._id}>{employee.name}</option>
                        })}
                    </select> <br />


            <label>Message</label>
            <textarea 
            type="text" 
            id= "message" 
            name="message" 
            value={this.state.message} 
            onChange={this.handleChange}>
            </textarea><br/>


            <label>Priority</label> 
            {
                this.state.priorities.map((priorityMsg)=>{
                    return(
                        <React.Fragment key={priorityMsg}>
                            <input type="radio" 
                            id={priorityMsg} 
                            value={priorityMsg} 
                            name="priority" 
                            onChange={this.handleChange} 
                            checked={this.state.priority === priorityMsg}/> 
                            <label htmlFor={priorityMsg}>{priorityMsg}</label>
                            </React.Fragment>
                    )
                })
            }
            <br/>


            <input type="submit" value="submit"/>

            </form>
            </div>
        )
    }
}

const mapStateToProps =(state, props)=> {
    //const id = props.match.params.id
    return{
        customers: state.customers,
        departments: state.departments,
        employees: state.employees,
        //tickets: findTicket(state.tickets, id)
}
}

export default connect(mapStateToProps)(TicketsForm)


/*


 {
                selectEmployeesByDepartment(this.props.employees, this.state.department).map((employees=>{
                    return <option key={employees._id} value={employees._id}>{employees.name}</option>
                }))
            }
*/