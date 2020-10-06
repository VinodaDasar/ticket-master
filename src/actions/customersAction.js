import axios from '../config/axios'

//To get the initial data from the backend 
export const setCustomers = (customers)=>{
    return {type: 'SET_CUSTOMERS', payload: customers}

}

export const startGetCustomers = ()=>{
    return(dispatch)=>{
    axios.get('/customers',{
        headers:{
            'x-auth': localStorage.getItem('authToken')
        }
    })
    .then((response)=>{
        const customers = response.data
        dispatch(setCustomers(customers))
    })
    .catch((err)=>{
        console.log(err)
    })
    }
}

//To perform Add operation
export const startGetAddCustomers = (formData, redirect) => {
    return(dispatch) => {
      axios.post('/customers', formData, {
        headers : {
          'x-auth' : localStorage.getItem('authToken')
        }
      })
      .then((response) => {
        console.log('data', response.data)
        if(response.data.hasOwnProperty('errors')){
          alert(response.data.message)
        }else{
          const customers = response.data
          dispatch(setCustomers(customers))
          redirect()
        }
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }

//To perform delete operation
export const setDeleteCustomers = (id)=>{
    return{type: 'DELETE_CUSTOMERS', payload: id}
}

export const startDeleteCustomers = (id, redirect)=>{
    return(dispatch)=>{
        axios.delete(`/customers/${id}`,{
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const customers = response.data
            dispatch(setDeleteCustomers(customers._id))
            redirect()
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}