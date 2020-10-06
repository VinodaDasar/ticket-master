import React from 'react'
import {connect} from 'react-redux'

import {startGetAddCustomers} from '../../actions/customersAction'


class CustomersForm extends React.Component{
            constructor(props){
                super(props)
                this.state={
                    name:'',
                    email:'',
                    mobile:''
                }
            }


    handleChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        const formdata = {
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile
        }
        const redirect = ()=>{
          return  this.props.history.push('/customers')
        }
        //console.log(formdata)
       this.props.dispatch(startGetAddCustomers(formdata, redirect))
    }

    render(){
        return(
            <div>
                 <form onSubmit={this.handleSubmit}>
                     <label>Name:</label>
                     <input type="text" name="name"  value={this.state.name} onChange={this.handleChange}/><br/>

                     <label>Email:</label>
                     <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/><br/>

                     <label>Mobile Num:</label>
                     <input type="text" name="mobile" value={this.state.mobile} onChange={this.handleChange}/><br/>

                     <input type="submit"/>
                 </form>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        customers: state.customers
    }
}

export default connect(mapStateToProps)(CustomersForm)