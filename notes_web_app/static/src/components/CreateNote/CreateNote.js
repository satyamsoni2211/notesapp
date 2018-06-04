import React, { Component } from 'react';
import axios from 'axios';
import { notify } from '../Utils/Util';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

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
            <div className='col-sm-8 col-sm-offset-2'>
                <Form>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input type="text" name="email" id="title" placeholder="enter title" 
                        onChange={e => this.setState({ title: e.target.value })} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="text">Text</Label>
                        <Input type="textarea" name="text" id="text" placeholder='Enter Text'
                        onChange={e => this.setState({ text: e.target.value })} />
                    </FormGroup>
                    <Button color="default" onClick={(e) => this.createNote(e)}>Create</Button>
                </Form>
            </div>
        );
    }
}

// <form className='box'>
// <label>Title: </label><input type="text" name='title' placeholder='Type your title here '
//     onChange={e => this.setState({ title: e.target.value })} />
// <hr />
// <textarea name="text" id="" cols="30" rows="10" placeholder='Type your Note here'
//     onChange={e => this.setState({ text: e.target.value })}></textarea>
// <br />
// <button className='btn btn-primary' onClick={(e) => this.createNote(e)}>Create</button>
// </form>
export default CreateNote;