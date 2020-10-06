import axios from '../config/axios'


export const setEmployees = (employees)=>{
 return {type: 'SET_EMPLOYEES', payload: employees}
}

export const startGetEmployees = ()=>{
    return(dispatch)=>{
        axios.get('/employees',{
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const employees = response.data
            console.log(employees)
            dispatch(setEmployees(employees))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const startGetAddEmployees = (formData, redirect)=>{
    return(dispatch)=>{
        axios.post('/employees', formData,{
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            console.log('data', response.data)
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }
            else{
                const employees = response.data
                dispatch(setEmployees(employees))
                redirect()
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

//to perform delete operation
export const setDeleteEmployees = (id)=>{
    return{type: 'DELETE_EMPLOYEES',payload: id}
}

export const startDeleteEmployees =(id, redirect)=>{
    return(dispatch)=>{
        axios.delete(`/employees/${id}`,{
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const employees = response.data
            dispatch(setDeleteEmployees(employees._id))
            redirect()
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}