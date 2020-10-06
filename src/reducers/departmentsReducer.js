const departmentInitialState = []

const departmentsReducers = (state = departmentInitialState, action) =>{
    switch(action.type){
        case 'SET_DEPARTMENTS':{
            return state.concat(action.payload) //has department obj
        }
        case 'DELETE_DEPARTMENT':{
            return state.filter(department => department._id !== action.payload)
        }
        default:{
            return [].concat(state)
        }
    }

}

export default departmentsReducers