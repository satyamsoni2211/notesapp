import React, { Component } from 'react';
import axios from 'axios';
import { notify } from '../Utils/Util';
import { Form, FormGroup, Label, Input, Button, Col } from 'reactstrap';

class CreateNote extends Component {
    state = {
        title: null,
        text: null
    }
    createNote = (e) => {
        e.preventDefault();
        console.log(this.props);
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/create/',
            data: {
                title: this.state.title,
                text: this.state.text
            },
            headers: {
                Authorization: `JWT ${window.sessionStorage.getItem('token')}`
            }
        }).then(r => {
            notify('Note Created', 'info');
            this.props.history.push('/view_notes');
        })
            .catch(err => {
                console.log(err.response);
                console.log(this.props);
                if (err.response.data.detail == 'Signature has expired.') {
                    this.props.logout();
                }
            });
    }
    render() {
        return (
            <div className='col-sm-6 offset-3 border rounded p-4 shadow border-light bg-light'>
                <h4 className='text-capitalize text-center text-info'>Create Note</h4>
                <Form>
                    <FormGroup row>
                        <Label for="title" sm={2}>Title</Label>
                        <Col sm={10}>
                            <Input type="text" name="title" id="title" placeholder="Enter Title"
                                onChange={e => this.setState({ title: e.target.value })} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="text" sm={2}>Text</Label>
                        <Col sm={10}>
                            <Input type="textarea" name="text" id="text"
                            placeholder='Enter Text'
                                onChange={e => this.setState({ text: e.target.value })} />
                        </Col>
                    </FormGroup>
                    <FormGroup check row>
                        <Col sm={{ size: 10, offset: 2 }}>
                            <Button onClick={(e) => this.createNote(e)} className='btn-outline-dark'>Submit</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default CreateNote;