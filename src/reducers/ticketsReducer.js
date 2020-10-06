const ticketsInitialState=[]

const ticketsReducer = (state= ticketsInitialState, action)=>{
    switch(action.type){
        case 'SET_TICKETS':{
            return [...action.payload]
        }
        case 'ADD_TICKETS':{
            //return state.concat(action.payload)
            return [...state, action.payload]
        }
        case 'DELETE_TICKETS':{
            return state.filter(ticket => ticket._id !== action.payload)
        }
        case 'EDIT_TICKETS':{
            return state.map(ticket => {
                if(ticket._id === action.payload._id){
                    return{ ...action.payload}
                }else{
                    return {...ticket}
                }
            })
        }
        default:{
            return [...state]
        }
    }
}

export default ticketsReducer