import axios from "../config/axios"

export const setTickets = (tickets)=>{
    return{type:'SET_TICKETS',payload:tickets}

}

export const startGetTickets = ()=>{
    return(dispatch)=>{
        axios.get('/tickets',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const tickets = response.data
            dispatch(setTickets(tickets))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

//add formdata into the list 
export const addTickets = (tickets)=>{
    return{type: 'ADD_TICKETS', payload: tickets}
}

export const startAddTickets = (formdata, redirect)=>{
    return(dispatch)=>{
        axios.post('tickets', formdata, {
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const ticket = response.data
            dispatch(addTickets(ticket))
            redirect()
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

//delete data

export const deleteTickets = (id)=>{
    return{type: 'DELETE_TICKETS', payload: id}
}


export const startDeleteTickets =(id)=>{
    return(dispatch)=>{
        axios.delete(`/tickets/${id}`,{
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const ticket = response.data
            dispatch(deleteTickets(ticket._id))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

//edit ticket

export const editTickets = (ticket)=>{
    return{type: 'EDIT_TICKETS', payload: ticket}
}

export const startEditTickets = (formData, id, redirect)=>{
    return(dispatch)=>{
        axios.put(`/tickets/${id}`, formData, {
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const ticket = response.data
            dispatch(editTickets(ticket))
            redirect()
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}
