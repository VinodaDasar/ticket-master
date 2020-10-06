import axios from '../config/axios'
 
export const setUser=(user)=>{
    return {type:'SET_USER', payload :user}
}

export const startLoginUser=(formData, redirect)=>{
    return (dispatch)=>{
        axios.post('/users/login', formData)
        .then((response)=>{
            if(response.data.hasOwnProperty('error')){
                alert(response.data.error)
            }else{
                //console.log(response.data)
                alert('successfully logged in')
                localStorage.setItem('authToken',response.data.token)
                axios.get('/users/account',{
                    headers:{
                        'x-auth' :localStorage.getItem('authToken')
                    }
                })
                .then((response)=>{
                    const user=response.data
                    console.log(user)
                    dispatch(setUser(user))
                    redirect()
                })
                .catch((err)=>{
                    console.log(err)
                })
            }
            
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const startGetUser=()=>{
    return(dispatch)=>{
        axios.get('/users/account',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const user =response.data
            console.log(user)
            dispatch(setUser(user))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}
export const startRegisterUser =(formData, redirect)=>{
    return(dispatch)=>{
        //console.log('action generator', formData)
        axios.post('/users/register', formData)
        .then((response)=>{
            //console.log(response.data)
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }else{
                alert('Submitted Successfully')
                //props.history.push('/users/login') //to enroute to login page after success
                redirect()
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const startUserLogout = ()=>{
    return (dispatch)=>{
        axios.delete('/users/logout',{
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            if(response.data.notice){
                alert(response.data.notice)
                localStorage.removeItem('authToken')
                dispatch(setUser({}))
                window.location.href = "/"
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}
