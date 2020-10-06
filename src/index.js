import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'

import configureStore from './store/configureStore'
import {startGetUser} from './actions/userAction'
import {startGetCustomers} from './actions/customersAction'
import {startGetDepartments} from './actions/departmentsAction'
import {startGetEmployees} from './actions/employeesAction'
import {startGetTickets} from './actions/ticketsAction'

const store =  configureStore()
console.log(store.getState())

store.subscribe(()=>{
    console.log(store.getState())
})

//handle page reload
if(localStorage.getItem('authToken')){
    store.dispatch(startGetUser())
    store.dispatch(startGetCustomers())
    store.dispatch(startGetDepartments())
    store.dispatch(startGetEmployees())
    store.dispatch(startGetTickets())
}

const jsx = (
    <Provider store={store}>
        <App/>
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('root'))