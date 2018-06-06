import React, { Component } from 'react';
import axios from 'axios';
import { Typeahead } from 'react-bootstrap-typeahead';
import Aux from '../../hoc/Aux';
import { Panel } from 'react-bootstrap';
import './ShareNotes.css';
import { notify } from '../Utils/Util';

class SharedNotes extends Component {
    state = {
        users: null,
        notes: null,
        note: null,
        user: null,
        can_edit: false
    }
    componentDidMount() {
        axios({
            method: 'GET',
            url: 'http://127.0.0.1:8000/api/sharenote/',
            headers: {
                Authorization: `JWT ${window.sessionStorage.getItem('token')}`
            }
        }).then(r => {
            console.log(r);
            this.setState({ users: r.data.users, notes: r.data.notes });
        })
            .catch(e => console.log(e));
    }
    refreshState = () => {
        this.setState({user: null,note: null, can_edit: false});
    }
    shareNote = (e) => {
        e.preventDefault();
        // this.state.user ? this.setState({ userflag: false }) : this.setState({ userflag: true });
        if (this.state.user == null) {
            notify('Please Select User !', 'error');
        }
        if (this.state.note == null) {
            notify('Please Select Note !', 'error');
        }
        if (this.state.note && this.state.user) {
            const noteid = this.state.notes[this.state.notes.findIndex(n => n.title == this.state.note)].id;
            console.log(noteid);
            console.log(this.state.user);
            console.log(`can edit: ${this.state.can_edit}`);
            axios({
                method: 'POST',
                url: 'http://127.0.0.1:8000/api/sharenote/',
                headers: {
                    Authorization: `JWT ${window.sessionStorage.getItem('token')}`
                },
                data: {
                    id: noteid,
                    username: this.state.user,
                    can_edit: this.state.can_edit
                }
            })
                .then(r => {
                    console.log(r);
                    this.refreshState();
                })
                .catch(e => {
                    console.log(e);
                    if (e.response.data.details) { notify(e.response.data.details, 'error'); }
                });
        }
    }
    render() {
        let noteIndex = this.state.note ?
            this.state.notes.findIndex(n => n.title == this.state.note) : -1;
        return (
            <Aux>
                <div className='col-sm-6 offset-3 border border-light bg-light p-4 shadow'>
                    <div className='text-uppercase text-center border border-left-0 border-right-0 border-top-0'>
                        This is for shared notes</div>
                    <h6 className='bg-light text-uppercase text-center pt-1'><small>Select User</small></h6>
                    {this.state.users &&
                        <Typeahead
                            onChange={(user) => {
                                this.setState({ user });
                            }}
                            labelKey="name"
                            placeholder="Choose a user..."
                            options={this.state.users.map(e => e.username)}
                        />}

                    <h6 className='bg-light text-uppercase text-center pt-1'><small>Select Note</small></h6>
                    {this.state.users && <Typeahead
                        onChange={(note) => {
                            this.setState({ note });
                        }}
                        placeholder="Choose a note..."
                        options={this.state.notes.map(e => e.title)}
                    />}
                    <div className="form-check pt-2">
                        <input type="checkbox" className="form-check-input" value={this.state.can_edit}
                            id='can_edit'
                            checked={this.state.can_edit}
                            onChange={e => { this.setState({ can_edit: e.target.checked }) }} />
                        <label className="form-check-label" htmlFor="can_edit">Can Edit ?</label>
                    </div>
                    <br />
                    <button className='btn btn-outline-info' onClick={(e) => this.shareNote(e)}>Share Note</button>
                </div>
                <br />
                <div className='col-sm-4 offset-4'>
                    {
                        noteIndex != -1 &&
                        <div className="card">
                            <div className="card-header text-center text-uppercase bg-warning">{this.state.notes[noteIndex].title}</div>
                            <div className="card-body bg-warning">{this.state.notes[noteIndex].text}</div>
                        </div>

                    }
                </div>
            </Aux>
        );
    }
}

export default SharedNotes;