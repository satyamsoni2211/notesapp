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
        userflag: false,
        errmessage: null
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
    shareNote = (e) => {
        e.preventDefault();
        // this.state.user ? this.setState({ userflag: false }) : this.setState({ userflag: true });
        if (this.state.user == null){
            notify('Please Select User !','error');
        }
        if (this.state.note == null){
            notify('Please Select Note !','error');
        }
        if (this.state.note && this.state.user) {
            const noteid = this.state.notes[this.state.notes.findIndex(n => n.title == this.state.note)].id;
            console.log(noteid);
            console.log(this.state.user);
            axios({
                method: 'POST',
                url: 'http://127.0.0.1:8000/api/sharenote/',
                headers: {
                    Authorization: `JWT ${window.sessionStorage.getItem('token')}`
                },
                data: {
                    id: noteid,
                    username: this.state.user
                }
            })
                .then(r => console.log(r))
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
                <div className='col-sm-6 col-sm-offset-3 border border-dark'>
                    <div>This is for shared notes</div>
                    <h4>Select User</h4>
                    <div id='Popover1'>{this.state.users &&
                        <Typeahead
                            onChange={(user) => {
                                this.setState({ user });
                            }}
                            labelKey="name"
                            placeholder="Choose a user..."
                            options={this.state.users.map(e => e.username)}
                        />}
                    </div>

                    <h4>Select Note</h4>
                    {this.state.users && <Typeahead
                        onChange={(note) => {
                            this.setState({ note });
                        }}
                        placeholder="Choose a note..."
                        options={this.state.notes.map(e => e.title)}
                    />}
                    <br />
                    <button className='btn btn-default' onClick={(e) => this.shareNote(e)}>Share Note</button>
                </div>
                <br />
                <div className='col-sm-4 col-sm-offset-4 mg-top-20'>
                    {
                        noteIndex != -1 &&
                        <Panel>
                            <Panel.Heading>{this.state.notes[noteIndex].title}</Panel.Heading>
                            <Panel.Body>{this.state.notes[noteIndex].text}</Panel.Body>
                        </Panel>
                    }
                </div>

            </Aux>
        );
    }
}

export default SharedNotes;