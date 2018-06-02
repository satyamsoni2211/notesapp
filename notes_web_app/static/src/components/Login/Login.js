import React, { Component } from 'react';
import './Login.css';
import axios from 'axios';
import qs from 'qs';
import {Redirect,withRouter} from 'react-router-dom';

class Login extends Component {
    state = {
        username: '',
        password: '',
        authToken: null,
        error: false,
        errorMessage: null
    }

    handleForm(e){
        e.preventDefault();
        console.log(this.state);
        console.log('Getting AuthToken');
        axios.post('http://127.0.0.1:8000/accounts/api-token-auth/', qs.stringify({
            'username': this.state.username,
            'password': this.state.password
        })).then((response) => {
                console.log(response);
                window.sessionStorage.setItem('token',response.data.token);
                this.setState({ authToken: response.data.token });
                console.log(this.props);
                this.props.history.push('/view_notes');

            }).catch(error => { console.log(error);
            this.setState({error: true, errorMessage: error});
         });
    }

    render(){
        return(
            <div className='Login'>
            <h3>Notes App</h3>
            <form>
            <br/>
            <div className='form-group'>
            <label htmlFor="username" >Username &nbsp;</label>
            <input type="text" name='username' value={this.state.username} 
            onChange={(e)=>{this.setState({username: e.target.value})}}
            className='form-control'/>
            </div>
            <br/>
            <div className='form-group'>
            <label htmlFor="password">Password &nbsp;</label>
            <input type="password" name='password' value={this.state.password}
            onChange={(e)=>{this.setState({password: e.target.value})}} 
            className='form-control'/>
            </div>
            <button className='btn btn-primary' onClick={(e) => this.handleForm(e)}>Login</button>
            {this.state.error ? <span className='help-block'>Wrong Username/Password</span> : null }
            </form>
            </div>
        );
    }
} 

export default withRouter(Login);