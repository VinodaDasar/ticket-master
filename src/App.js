import React from 'react'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import {connect} from 'react-redux'

import Home from './components/static/Home'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import {startUserLogout} from './actions/userAction'

import CustomersList from './components/customers/List'
import CustomersForm from './components/customers/Form'

import DepartmentsList from './components/departments/List'
import DepartmentsForm from './components/departments/Form'

import EmployeesList from './components/employees/List'
import EmployeesForm from './components/employees/Form'

import TicketsList from './components/tickets/List'
import TicketsForm from './components/tickets/Form'
import TicketEdit from './components/tickets/Edit'


function App(props){
    const handleLogout = () =>{
        props.dispatch(startUserLogout())

    }
    return(
        <BrowserRouter>
        <div>
            <h1>Ticket Master</h1>

            <Link to="/">Home</Link>--

            {
                Object.keys(props.user).length !== 0 ? (
                    <div>
                        <Link to="/customers">Customers</Link>--
                        <Link to="/departments">Departments</Link>--
                        <Link to="/employees">Employees</Link>--
                        <Link to="/tickets">Tickets</Link>--
                        <Link to="#" onClick={handleLogout}>Logout</Link>
                    </div>
                ):(
                    <div>
                        <Link to="/users/register">Register</Link>--
                        <Link to="/users/login">Login</Link>
                    </div>
                )
            }

           

            <Switch>
                <Route path="/" component={Home} exact={true}/>
                <Route path="/users/register" component={Register}/>
                <Route path="/users/login" component={Login}/>

                <Route path="/customers" component={CustomersList} exact={true}/>
                <Route path="/customers/new" component={CustomersForm}/>

                <Route path="/departments" component={DepartmentsList} exact={true}/>
                <Route path="/departments/new" component={DepartmentsForm}/>

                <Route path="/employees" component={EmployeesList} exact={true}/>
                <Route path="/employees/new" component={EmployeesForm}/>
                
                <Route path="/tickets" component={TicketsList} exact={true}/>
                <Route path="/tickets/new" component={TicketsForm}/>
                <Route path="/tickets/edit/:id" component={TicketEdit}/>
                

            </Switch>
        </div>
        </BrowserRouter>
    )
}

const mapStateToProps = (state)=>{
    return{
        user: state.user
    }
}

export default connect(mapStateToProps)(App)