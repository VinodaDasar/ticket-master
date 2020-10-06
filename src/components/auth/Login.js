import React from 'react'
import {connect} from 'react-redux'
import {startLoginUser} from '../../actions/userAction'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email: '',
            password: ''
        }
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        const formData={
            email: this.state.email,
            password: this.state.password
        }
        console.log(formData)
        const redirect = ()=>{
            return this.props.history.push('/')
        }
        this.props.dispatch(startLoginUser(formData, redirect))
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })

    }


    render(){
        return(
            <div>
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Email</label>
                    <input type="text" id="email" value={this.state.email} name="email" onChange={this.handleChange}/> <br/>

                    <label>Password</label>
                    <input type="password" id="password" value={this.state.password} name="password" onChange={this.handleChange}/> <br/>

                    <input type="submit" value="Login"/>

                </form>

            </div>
        )
    }
}

export default connect()(Login)