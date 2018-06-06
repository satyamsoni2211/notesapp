import React, { Component } from 'react';
import './Login.css';
import axios from 'axios';
import qs from 'qs';
import { Redirect, withRouter } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Tooltip } from 'reactstrap';
import Aux from '../../hoc/Aux';

class Login extends Component {
    state = {
        username: '',
        password: '',
        authToken: null,
        error: false,
        errorMessage: null,
        nouser: false,
        nopassword: false
    }

    handleForm(e) {
        e.preventDefault();
        !this.state.username ? this.setState({nouser: true}) : this.setState({nouser: false}); 
        !this.state.password ? this.setState({nopassword: true}) : this.setState({nopassword: false}); 
        if (this.state.username && this.state.password) {
            console.log(this.state);
            console.log('Getting AuthToken');
            axios.post('http://127.0.0.1:8000/accounts/api-token-auth/', qs.stringify({
                'username': this.state.username,
                'password': this.state.password
            })).then((response) => {
                console.log(response);
                window.sessionStorage.setItem('token', response.data.token);
                this.setState({ authToken: response.data.token });
                console.log(this.props);
                this.props.history.push('/view_notes');

            }).catch(error => {
                console.log(error);
                this.setState({ error: true, errorMessage: error });
            });
        }
    }

    render() {
        return (
            
            <Aux>
            <div className='container-fluid h-100'>
                <div className='row'>
                    <div className='col-sm-6 offset-3 mt-5 bg-light shadow p-4 rounded'>
                        <Form>
                            <FormGroup>
                                <h5 className='text-uppercase text-center text-secondary'>Username</h5>
                                <Input type="text" name="username" id='username' value={this.state.username}
                                    onChange={(e) => { this.setState({ username: e.target.value }) }} />
                            </FormGroup>
                            {' '}
                            <FormGroup>
                                <h5 className='text-uppercase text-center text-secondary'>Password</h5>
                                <Input type="password" name="password" id="password"
                                    value={this.state.password}
                                    onChange={(e) => { this.setState({ password: e.target.value }) }} />
                            </FormGroup>
                            {' '}
                            <Tooltip placement="right" isOpen={this.state.nouser} target="username">
                                Please Enter username
                            </Tooltip>
                            <Tooltip placement="right" isOpen={this.state.nopassword} target="password">
                                Please Enter password
                            </Tooltip>
                            <div className='text-center'>
                                <Button onClick={(e) => this.handleForm(e)} className='btn btn-outline-secondary'>Submit</Button>
                                {this.state.error ? <span className='text-light'>Wrong Username/Password</span> : null}
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
            </Aux>
        );
    }
}

export default withRouter(Login);