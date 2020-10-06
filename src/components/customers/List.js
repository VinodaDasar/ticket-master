import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import { startDeleteCustomers } from '../../actions/customersAction'

class CustomersList extends React.Component{


    handleRemove=(id)=>{
        const confirmRemove = window.confirm("Are You Sure")
        if(confirmRemove){
            this.props.dispatch(startDeleteCustomers(id))
        }
    }


    render(){
        return(
            <div>
                <h1>Customers - {this.props.customers.length}</h1>
                <table border="1">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>mobile</th>
                        <th>actions</th>
                        <th>remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.customers.map((customers)=>{
                            return(
                                <tr>
                                    <td>{customers._id}</td>
                                    <td>{customers.name}</td>
                                    <td>{customers.email} </td>
                                    <td>{customers.mobile}</td>
                                    <td><button>Show</button></td>
                                    <td><button onClick={()=>{
                                        this.handleRemove(customers._id)}}>Remove</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                </table>
                <Link to="/customers/new">Add Customer</Link>
            </div>

        )
    }
}

const mapStateToProps = (state) =>{
    return{
        customers: state.customers
    }
}

export default connect(mapStateToProps)(CustomersList)
