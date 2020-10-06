const customerInitialState = []

const customersReducers = (state = customerInitialState, action) =>{
    switch(action.type){
        case 'SET_CUSTOMERS':{
            return state.concat(action.payload)
        }
        case 'DELETE_CUSTOMERS':{
            return state.filter(customer=>customer._id !== action.payload)
        }
        default:{
           return [].concat(state)
        }
    }

}

export default customersReducers