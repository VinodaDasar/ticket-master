const employeesInitialState = []

const employeesReducer = (state = employeesInitialState, action) =>{
    switch(action.type){
        case 'SET_EMPLOYEES':{
            return state.concat(action.payload)
        }
        case 'DELETE_EMPLOYEES':{
            return state.filter(employees=>employees._id !== action.payload)
        }
        default:{
            return [...state]
        }
    }
}

export default employeesReducer