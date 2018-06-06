import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';
import Note from '../Note/Note';
import { Redirect } from 'react-router-dom';
import { notify } from '../Utils/Util';

class Shared_with_me extends Component {
    state = {
        notes: [],
        authToken: window.sessionStorage.getItem('token'),
        deleted: 0
    }
    componentDidUpdate() {

        console.log(`logging get request using authtoken JWT ${window.sessionStorage.getItem('token')}`);
    }
    deleteHandle = (id) => {
        const { notes } = this.state;
        const list = notes.filter((note) => note.id !== id)
        this.setState({ notes: list });
    }
    componentDidMount() {
            axios({
                method: 'GET',
                url: 'http://127.0.0.1:8000/api/shared_with_me/',
                headers: { Authorization: `JWT ${this.state.authToken}` }
            })
                .then(response => {
                    console.log(response.data);
                    let notes = [];
                    response.data.shared_user.forEach(e =>{
                        notes.push({...e.note,can_edit: e.can_edit});
                    });
                    
                    console.log(notes);
                    this.setState({notes});
                    // this.setState({ notes: [...response.data] });
                }).catch(e => {
                    console.log(e.response);
                    console.log(this.props);
                    // notify(e.response.data.details, 'error');
                    // window.sessionStorage.removeItem('token');
                    // this.props.history.push('/login');
                });
    }

    render() {
        let notes = <div> No content found </div>;
        if (this.state.notes.length >= 1) {
            notes = this.state.notes.map((n, index) => <Note
                id={n.id}
                title={n.title}
                created={n.created}
                text={n.text}
                key={index}
                token={this.state.authToken}
                deleteHandler={this.deleteHandle}
                can_edit={n.can_edit}
            />);
        }
        return (
            <div className='row'>
                <div className='col-sm-12'>
                    {notes}
                </div>
            </div>);
    }
};

export default Shared_with_me;