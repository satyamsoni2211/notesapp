import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';
import Note from '../Note/Note';
import { Redirect } from 'react-router-dom';
import {notify} from '../Utils/Util';

class Notes extends Component {
    state = {
        notes: [],
        authToken: this.props.token,
        deleted: 0,
        refreshed_notes: []
    }
    shouldComponentUpdate(){
        return this.state.refreshed_notes !== this.state.notes ? true : false;
    }
    componentDidUpdate() {

        console.log(`logging get request using authtoken JWT ${window.sessionStorage.getItem('token')}`);

        // if (this.state.notes !== this.state.refreshed_notes){
        //     this.setState({notes: this.state.refreshed_notes});
        // }

        // if (this.state.authToken == undefined) {
        //     this.props.history.push('/login');
        // }
    }
    deleteHandle = (id) => {
        const {notes} = this.state;
        const list = notes.filter((note) => note.id !== id)
        this.setState({notes: list});
    }
    componentDidMount() {
        if (this.state.authToken && this.state.notes.length <= 0) {
            axios({
                method: 'get',
                url: 'http://127.0.0.1:8000/api/list/',
                headers: { Authorization: `JWT ${this.state.authToken}` }
            })
                .then(response => {
                    console.log(response.data);
                    this.setState({ refreshed_notes: [...response.data] });
                    this.state.notes ? this.setState({ notes: [...response.data] }): null;
                }).catch(e => {
                    console.log(e.response);
                    console.log(this.props);
                    notify(e.response.data.details,'error');
                    window.sessionStorage.removeItem('token');
                    this.props.history.push('/login');
                });
        }
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

export default Notes;