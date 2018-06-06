import React, { Component } from 'react';
import './Note.css';
import axios from 'axios';
import { notify } from '../Utils/Util';


class Note extends Component {
    state = {
        text: this.props.text
    }
    updateNote(id) {
        console.log(`Updating Note with text ${this.state.text}`);
        axios({
            method: 'post',
            url: `http://127.0.0.1:8000/api/Notes/${id}/`,
            headers: { Authorization: `JWT ${this.props.token}` },
            data: {
                'text': this.state.text,
            }
        })
            .then((response) => {
                // console.log(response)
                console.log(response);
                notify('Note Updated', 'info');

            }).catch(error => {
                console.log(error);
                notify('Cannot update note', 'error');
            });
    }

    deleteNote(id) {
        console.log(`deleting note with id ${id}`);
        axios({
            method: 'post',
            url: `http://127.0.0.1:8000/api/delete/${id}/`,
            headers: { Authorization: `JWT ${this.props.token}` }
        })
            .then((response) => {
                // console.log(response)
                console.log(response);
                console.log(this.props)
                notify('Note deleted', 'info');
                this.props.deleteHandler(id);
            }).catch(error => {
                console.log(error);
                notify('Cannot Delete the Note', 'error');
            });

    }
    render() {
        console.log(this.props);
        return (
            <div className="note-wrap note-white col-sm-3 rounded">
                <h5>{this.props.title}</h5>
                <hr />
                <textarea className="form-control" rows="5"
                    value={this.state.text}
                    onChange={(e) => { this.setState({ text: e.target.value }); }}>
                </textarea>
                <h6>Created at: <span className='badge badge-pill badge-info'><small>{this.props.created}</small></span></h6>
                
                { ( this.props.can_edit == true || this.props.can_edit == undefined) && <div className="btn-group">
                    <button type="button" className="btn btn-outline-secondary" onClick={() => { this.updateNote(this.props.id) }}>
                        <i className="fas fa-edit"></i></button>
                    <button type="button" className="btn btn-outline-secondary" onClick={() => this.deleteNote(this.props.id)}>
                        <i className="fas fa-trash-alt" ></i>
                    </button>
                </div>}
            </div>);
    }
}

export default Note;