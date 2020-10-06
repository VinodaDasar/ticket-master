import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import userReducer from '../reducers/userReducer'
import departmentsReducers from '../reducers/departmentsReducer'
import customersReducers from '../reducers/customersReducer'
import employeesReducer from '../reducers/employeesReducer'
import ticketsReducer from '../reducers/ticketsReducer'

const configureStore= ()=>{
const store = createStore(combineReducers({
    user: userReducer,
    departments: departmentsReducers,
    customers: customersReducers,
    employees: employeesReducer,
    tickets: ticketsReducer
}), applyMiddleware(thunk))
return store
}


export default configureStore