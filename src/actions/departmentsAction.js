import axios from '../config/axios'

//To get Initial data from backend
export const setDepartments = (departments)=>{
return {type: 'SET_DEPARTMENTS', payload: departments}
}

export const startGetDepartments = ()=>{
    return(dispatch)=>{
    axios.get('/departments',{
        headers:{
            'x-auth': localStorage.getItem('authToken')
        }
    })
    .then((response)=>{
       const departments = response.data
       dispatch(setDepartments(departments))
    })
    .catch((err)=>{
        console.log(err)
    })
    }
}


//To add the data to the exsisting data from form
export const startGetAddDepartments = (formdata, redirect)=>{
    return(dispatch)=>{
        axios.post('/departments',formdata,{
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
        console.log('data', response.data)
        if(response.data.hasOwnProperty('errors')){
          alert(response.data.message)
        }else{
            const departments = response.data
            dispatch(setDepartments(departments))
            redirect()
        }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

//delete data
export const deleteDepartment =(id)=> {
    return { type: 'DELETE_DEPARTMENT', payload: id}
}

export const startDeleteDepartment = (id)=>{
    return (dispatch)=>{
        axios.delete(`/departments/${id}`,{
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const department = response.data
            dispatch(deleteDepartment(department._id))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

